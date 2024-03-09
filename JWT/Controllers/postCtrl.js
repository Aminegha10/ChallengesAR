//view the user's post
const UserModel = require("../Models/users");
require("dotenv").config();
exports.viewpost = async (req, res) => {
  const postuser = await UserModel.findOne({ username: req.user.username });
  res.status(200).send(postuser);
};
//add a new post to database
exports.addpost = (req, res) => {
  UserModel.create(req.body)
    .then(() => res.send("The post has created"))
    .catch((err) => {
      console.log(err);
      res.status(404).send("There is an error in the server ");
    });
};
//edit an existing post
exports.updatepost = (req, res) => {
  UserModel.findOneAndUpdate(
    { username: req.params.username },
    {
      $set: { username: "UpdatedUsername" },
    }
  )
    .then((userupdated) => {
      if (!userupdated)
        return res.status(404).send("The user want to update doesnt exist");
      return res.send(
        `The user updated successffully and it is:${userupdated}`
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("There is an error in the server ");
    });
};
//delete a post from the database
exports.deletepost = (req, res) => {
  UserModel.findOneAndDelete({ username: req.params.username })
    .then((userdeleted) => {
      if (!userdeleted)
        return res.status(404).send("The user want to delete doesnt exist");
      return res
        .status(200)
        .send("The user deleted successffully and it is:" + userdeleted);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("There is an error in the server ");
    });
};
