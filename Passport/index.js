require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('./strategies/local')


const router = require('./routes/userRoute');
const postRouter = require('./routes/postRoute')



const URI = process.env.MONGO_KEY;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());





mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });




app.use("/users",router);

app.use("/posts",postRouter);

//app.use("/auth",authRouter);


app.listen(3000, () => {
  console.log('app listening on port 3000!');
});