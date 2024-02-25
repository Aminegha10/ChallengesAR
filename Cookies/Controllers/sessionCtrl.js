const bcrypt = require("bcrypt");
const users = [];
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    users.push({ username, hashPassword });
    res.send("The user has registred");
  } catch (err) {
    res.status(400).send(`Error ${err}`);
  }
};
exports.login = async (req, res) => {
  try {
    if (req.cookies.ourcookie == req.sessionID) {
      res.send("You are already looged in ");
    } else {
      //distructing our request body to get the username and password from it
      const { username, password } = req.body;
      const user = users.find((user) => user.username === username);
      if (!user) {
        res.status(404).send("No user found ");
      } else {
        isPasswordValid = await bcrypt.compare(password, user.hashPassword);
        if (isPasswordValid) {
          req.session.user = user;
          res.cookie("ourcookie", req.sessionID, { httpOnly: true });
          res.send("you are logged in as " + user.username);
        } else {
          res.status(500).send("The password is uncorrect ");
        }
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.logout = (req, res) => {
  //The req.session.destroy() function in Express.js is used to destroy the session associated with the current request. It removes the session data stored on the server and clears the session cookie from the client's browser.
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    res.status(200).send("You have logged out successfully");
  });
};
exports.protected = (req, res) => {
  res.send("you has not authenticated");
};
exports.users = (req, res) => {
  res.send(users);
};

