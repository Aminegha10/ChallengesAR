require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const postrouter = require("./Routes/postsRoutes");
const userrouter = require("./Routes/userRoutes");

const mongoose = require("mongoose");

const Port = process.env.Port;
const URI = process.env.Database;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/posts", postrouter);
app.use("/users", userrouter);
// app.get("/", (req, res) => {
//   res.redirect("http://localhost:5173/Home");
// });

mongoose
  .connect(URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
app.listen(Port, () => {
  console.log("app listening on port 3000!");
});
