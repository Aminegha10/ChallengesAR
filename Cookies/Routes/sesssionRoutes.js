const router = require("express").Router();
const { register, login, logout,users ,protected } = require("../Controllers/sessionCtrl");
const { checkAuth } = require("../middleware/checkAutch");
//registration endpoint.
router
  .post("/register", register)
  //login endpoint.
  .post("/login", login)
  .post("/protected", checkAuth, protected)
  //logout / destruction of the active session.
  .post("/logout", logout)
  .get("/users", users);
module.exports = router;
