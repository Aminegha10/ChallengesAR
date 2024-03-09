const router = require("express").Router();
const { getPosts, creatPosts } = require("../controllers/postController.js");
router.get("/read",getPosts).post("/add",creatPosts)
module.exports=router