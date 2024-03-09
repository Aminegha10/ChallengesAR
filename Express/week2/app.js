// Import the express module
const express = require("express");
// Create an instance of the express app
const app = express();
// Import the logging middleware
const { log } = require("./middlewares/logging.js");
// Import the post routes
const postRoutes = require("./routes/postRoutes");
// Set the port number for the server
const port = 3000;
// Use the express.json() middleware to parse incoming JSON data
app.use(express.json());
// Use the logging middleware for all requests to the "/data" endpoint
app.use("/data", log, postRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  // If there is an error, log it to the console
  if (err) {
    console.log(err);
  }
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("The server is running on port:", port);
});
