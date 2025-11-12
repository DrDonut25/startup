const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require("express");
const app = express();
const db = require('./database.js');

const authCookieName = 'token';

let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

//For parsing JSON objects
app.use(express.json());

//For tracking authToken cookies
app.use(cookieParser());

//For serving front-end static hosting
app.use(express.static('public'));

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Register new user
apiRouter.post('/auth/create', async (req,res) => {
    //If user already exists, return 409 error
    if (await getUser('username', req.body.username)) {
        res.status(409).send({ msg: 'this username is already taken' })
    } else {
        const user = createUser(req.body.username, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ username: user.username });
    }
});

//Login existing user
apiRouter.post('/auth/login', async (req,res) => {
    //Use bcrypt to compare provided password with stored password hash—return 401 error if passwords do not match
    const user = await getUser('username', req.body.username);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        user.token = uuid.v4();
        await db.updateUser(user);
        setAuthCookie(res, user.token);
        res.send({ username: user.username });
    } else {
        res.status(401).send({ msg: 'unauthorized' });
    }
});

//Logout user
apiRouter.delete('/auth/logout', async (req,res) => {
    //Get user by token (not email, since you need a user that's logged in)
    const user = getUser('token', req.cookies[authCookieName]);
    //If user is logged in, delete authToken and clear cookie storing it—set status code to 204 if successful
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//Helper function used to create cookie storing authToken
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
  });
}

//Helper function used to create new user objects
async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10)

    //create user object—token represents generated authToken
    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

    return user;
}

//Helper function used to get user by field (username, token, etc.)
async function getUser(field, value) {
    if (!value) {
        return null;
    }
    return users.find((user) => user[field] === value);
}

//Default error handler
app.use(function (e, req, res, next) {
    res.status(500).send({ type: e.name, message: e.message });
});

//For returning to default web page when path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});