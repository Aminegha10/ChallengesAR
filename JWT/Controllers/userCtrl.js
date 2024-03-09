require("dotenv").config();
const UserModel = require("../Models//users");
const jwt = require("jsonwebtoken");
const secret_key = process.env.ACCESS_TOKEN_SECRET;
//login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    try {
      post = await UserModel.findOne({ username });
      if (post) {
        if (post.password != password)
          return res.send("The password is Invalid");
        const accesstoken = jwt.sign({ username, password }, secret_key);
        return res.json({ accesstoken: accesstoken });
      }
      return res.send("User not found");
    } catch (err) {
      console.log(err);
    }
  }
  return res.send("Missing data in request body");
};
//register
exports.register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Missing username or password in request body");
  } else {
    UserModel.create({ username, password })
      .then(() => {
        return res.send("user is created");
      })
      .catch((err) => console.log(err));
  }
};
