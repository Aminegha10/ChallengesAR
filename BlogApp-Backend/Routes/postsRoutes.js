const express = require("express");
const postrouter = express.Router();
const { authentication } = require("../Middlewares/authentication");
const {
  addpost,
  getposts,
  deletepost,
} = require("../Controllers/postsController");
postrouter
  .get("/getposts", authentication, getposts)
  .post("/addpost", authentication, addpost)
  .delete("/deletepost/:title", authentication, deletepost)
module.exports = postrouter;
