const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const express = require("express");
const app = express();

let users = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

//Register new user
apiRouter.post('/auth/create', async (req,res) => {
    //If user already exists, return 409 error
    if (await getUser('username', req.body.username)) {
        res.status(409).send({msg: 'Error: this username is already taken'})
    } else {
        const user = createUser(req.body.username, req.body.password);

        res.send({ username: user.username});
    }
});

//Login existing user

//Logout user

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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});