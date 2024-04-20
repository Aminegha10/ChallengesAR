require("dotenv").config();
const UserModel = require("../Models/users");
const jwt = require("jsonwebtoken");
const secret_key = process.env.ACCESS_TOKEN_SECRET;
//login
exports.login = async (req, res) => {
  const { password, email } = req.body;
  if (password && email) {
    try {
      user = await UserModel.findOne({ email });
      if (user) {
        if (user.password != password)
          return res.status(404).send("The password is Invalid");
        const accesstoken = jwt.sign({ password, email }, secret_key);
        const a = { accesstoken };
        return res
          .status(200)
          .json(accesstoken);
      }
      return res.status(404).send("User not found");
    } catch (err) {
      return res.status(404).send(err);
    }
  }
  return res.status(404).send("Missing data in request body");
};
//register
exports.register = (req, res) => {
  // if (!username || !password) {
  //   return res.status(400).send("Missing username or password in request body");
  // } else {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};
