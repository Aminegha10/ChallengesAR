// Import the getAllPosts and createPost functions from the post.js file in the models directory
const { getAllPosts, createPost } = require("../models/post.js");
// This function handles GET requests to /posts and returns a list of all posts
exports.getPosts = (req, res, next) => {
  // Try to execute the following code block
  try {
    // Call the getAllPosts function with the filename "data.json" and send the result as a JSON response with a 201 status code
    res.status(201).send(getAllPosts("data.json"));
    // Call the next middleware function in the stack
    next();
    // If there is an error, call the next error handling middleware function with an error message
  } catch (err) {
    next("Cannot read the data");
  }
};
// This function handles POST requests to /posts and creates a new post with the provided data
exports.creatPosts = (req, res, next) => {
  // Try to execute the following code block
  try {
    // Convert the request body to a JSON string and assign it to the newdata variable
    const newdata = JSON.stringify(req.body);
    // Call the createPost function with the filename "newdata.json" and the new post data as arguments
    createPost("newdata.json", newdata);
    // Send a success message as a response
    res.send("The process succeded");
    // Call the next middleware function in the stack
    next();
    // If there is an error, call the next error handling middleware function with an error message
  } catch (err) {
    next("The new file data is not created");
  }
};
