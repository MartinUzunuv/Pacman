var express = require("express");
var router = express.Router();

const { MongoClient } = require("mongodb");

const url =
"mongodb+srv://martoo:azpass@cluster0.akv9o8h.mongodb.net/?retryWrites=true&w=majority";

async function createListing(client, newListing, collection) {
  const result = await client
    .db("Pacman")
    .collection(collection)
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function checkAccountExistence(client, name, collection) {
  const result = await client
    .db("Pacman")
    .collection(collection)
    .findOne({ name: name });

  if (result) {
    return true; // Account exists
  } else {
    return false; // Account does not exist
  }
}

async function createAccount(name, password, res) {
  var client = new MongoClient(url);

  await client.connect();

  const accountExists = await checkAccountExistence(client, name, "Accounts");

  if (accountExists) {
    res.send({ valid: false });
  } else {
    await createListing(client, { name: name, password: password, topScore: 0 }, "Accounts");

    res.send({ valid: true });
  }

  await client.close();
}

router.get("/", function (req, res, next) {
  res.sendFile(__dirname + "..public/index.html");
});

router.post("/createAcc", (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  createAccount(name, password, res);
});

router.post("/logIn", async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;

  const client = new MongoClient(url);

  try {
    await client.connect();

    const account = await client
      .db("Pacman")
      .collection("Accounts")
      .findOne({ name: name, password: password });

    if (account) {
      res.send({ valid: true, topScore: account.topScore });
    } else {
      res.send({ valid: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while authenticating user");
  } finally {
    await client.close();
  }
});

router.post("/updatePoints", async (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  let newPoints = req.body.topScore;

  var client = new MongoClient(url);
  await client.connect();
  const result = await client
  .db("Pacman")
  .collection("Accounts")
    .updateOne(
      { name: name, password: password },
      { $set: { topScore: newPoints }}
    );
  await client.close();
  res.send();
});

module.exports = router;
