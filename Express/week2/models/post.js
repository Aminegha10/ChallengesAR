// Importing the built-in 'fs' module for interacting with the file system
const fs =require("fs");
//Function to retrieve all posts from a JSON file
getAllPosts = (filepath) => {
  // Using 'readFileSync' method to read the fileously and return its contents as a JSON object
  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
};
// Function to create a new post and write it to a JSON file
createPost = (filepath, data) => {
  // Using 'writeFileSync' method to write the new post data to the file synchronously
  fs.writeFileSync(filepath, data);
};
// Exporting both functions as modules
module.exports = { getAllPosts, createPost };
