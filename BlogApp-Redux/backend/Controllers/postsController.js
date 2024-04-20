const posts_model = require("../Models/posts");
exports.addpost = (req, res) => {
  console.log(req.body);
  posts_model
    .create(req.body)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.json(err));
};
exports.getposts = (req, res) => {
  posts_model
    .find()
    .then((posts) => res.json(posts))
    .catch((err) => res.json(err));
};
exports.deletepost = (req, res) => {
  posts_model
    .findOneAndDelete({ title: req.params.title })
    .then((posts) => res.json(posts))
    .catch((err) => res.json(err));
};
