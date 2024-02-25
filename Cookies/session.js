const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const uuid = require("uuid");
const router =require("./Routes/sesssionRoutes")
const app = express();
const Port = 3000;
//server-variable
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//middleware of session
app.use(
  session({
    genid: (req) => uuid.v4(),
    secret: "mySecretKey", // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session for every request, even if it hasn't changed
    saveUninitialized: true, // Whether to save uninitialized sessions (new but not modified)
  })
);
app.use(router)
//listening to our Port 3000
app.listen(Port, () => {
  console.log("server is running on port:", Port);
});
