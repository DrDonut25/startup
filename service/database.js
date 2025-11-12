const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

const db = client.db('startup');
const userCollection = db.collection('startup_user');

//db connection test
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

//db access methods
async function getUserByName(username) {
    return await userCollection.findOne({ username: username });
}

async function getUserByToken(token) {
    return await userCollection.findOne({ token: token });
}

//db update methods
async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ username: user.username }, { $set: user });
}

module.exports = {
  getUserByName,
  getUserByToken,
  addUser,
  updateUser,
}