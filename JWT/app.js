require("dotenv").config();
const express = require("express");
const postrouter = require("./Routes/postRoutes");
const userrouter = require("./Routes/userRoutes");
const app = express();
const port = 3000;
const uri = process.env.DATA_BASE_SERVER;
const mongoose = require("mongoose");
//connect with the database
mongoose
  .connect(uri)
  .then(() => console.log("the database connected"))
  .catch((err) => console.log(err));
//convert to js object
app.use(express.json());
//blogs
app.use("/blogs", postrouter);
//users
app.use("/user", userrouter);
app.listen(port, () => console.log("The server is runnig on port:", port));