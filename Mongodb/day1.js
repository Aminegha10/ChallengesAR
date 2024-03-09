const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");

client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.log("Error: ", error));
const collection = client.db("mydb").collection("users");
// Insert data into users collection
collection
  .insertMany([
    { name: "mohamed", age: 20 },
    { name: "amine", age: 21 },
    { name: "ghanim", age: 22 },
  ])
  .then(() => {
    console.log("the user has successfully added ");
  })
  .catch((err) => {
    console.log("there is an error here :", err);
  });
// Retrieve all documents from users collection
collection
  .find()
  .toArray()
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log("there is an error here :", err);
  });
