const express = require("express");
const app = express();
const port = 3000;
// Middleware to log request information
app.use((req, res, next) => {
  try {
    // Log request method and URL
    console.log("Request Type:", req.method, "URL:", req.url);
    // Get current date and format it as a string
    const currentDate = new Date();
    const formattedDates = currentDate.toString();
    console.log(formattedDates); // Typo: should be formattedDate
    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Pass any caught errors to the error handling middleware
    next(err);
  }
});
// Route handler for the root path
app.get("/amine", (req, res, next) => {
  try {
    // Send a response indicating everything is okay
    res.send("okey!");
  } catch (err) {
    // Pass any caught errors to the error handling middleware
    next(err);
  }
});
app.post("/", (req, res, next) => {
  try {
    // Send a response indicating everything is okay
    res.send("okey!");
  } catch (err) {
    // Pass any caught errors to the error handling middleware
    next(err);
  }
});
// Error handling middleware
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  // Log the error to the console
  console.log(err);
  // Send a 500 Internal Server Error response with a user-friendly message
  res.status(500).send("There was a problem processing your request.");
});
// Start the server
app.listen(port, () => {
  console.log("Server is running on port", port);
});
