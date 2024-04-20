const mongoose = require("mongoose");
const posts_schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
const posts_model = mongoose.model("posts", posts_schema);
module.exports = posts_model;
