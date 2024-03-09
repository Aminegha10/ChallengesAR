const express = require("express");
const postrouter = express.Router();
const {
  viewpost,
  addpost,
  updatepost,
  deletepost,
} = require("../Controllers/postCtrl");
const { authentication } = require("../Middleware/authentication");
//post routes
postrouter
  .get("/posts", authentication, viewpost)
  .post("/add", authentication, addpost)
  .put("/update/:username", authentication, updatepost)
  .delete("/delete/:username", authentication, deletepost);
module.exports = postrouter;
