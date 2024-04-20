const express = require("express");
const userrouter = express.Router();
const { login, register } = require("../Controllers/userCtrl");
userrouter.post("/login", login).post("/register", register);
module.exports = userrouter;
