const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("connected to database"))
  .catch((err) => {
    console.log(err);
  });
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, default: new Date() }
});
//add a new user // model= collection(every documents) has a specifique schema (rules)
const User = mongoose.model("users", UserSchema);
const user = new User({
  name: "Mike Ross",
  email: "mike.ross@arkx.group",
  age: 30,
}).save();
//find all users
User.find({})
  .then((users) => console.log(users))
  .catch((err) => console.log(err));
// //find one user
User.findOne({ name: "Mike Ross", email: "mike.ross@arkx.group" })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
//find and update a user
User.findOneAndUpdate(
  { name: "Mike Ross" },
  { $set: { email: "aminogha@gmail.com" } }
)

  .then((user) => {
    if (user) console.log("this is the updated user :", user);
    else console.log("user not found :", user);
  })
  .catch((err) => console.log(err));
//find and delete a user
function deletUsers(User) {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  User.deleteMany({ createdAt: { $lt: oneWeekAgo } })
    .then((user) => {
      if (user) console.log("the deleted user :", user.deletedCount);
      else console.log("users not found :");
    })
    .catch((err) => console.log(err));
}
deletUsers(User);