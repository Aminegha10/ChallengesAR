const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret_key = process.env.ACCESS_TOKEN_SECRET;
exports.authentication = (req, res, next) => {
  const header = req.headers.authorization;
  if (header == null) {
    return res.send("header not found");
  }
  const token = header.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, secret_key, (err, user) => {
    if (err) return res.send("You have to log in");
    req.user = user;
    next();
  });
};
