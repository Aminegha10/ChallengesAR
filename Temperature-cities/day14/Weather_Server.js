// Import the 'http' module
const http=require("http")
// Import the 'url' module
const url = require("url");
// Create a server using the 'http' module
const server = http.createServer(async (req, res) => {
  // Parse the URL of the incoming request.
  parseurl = url.parse(req.url, true);
  // Extract the path from the parsed URL.
  path = parseurl.pathname;
  // Extract the query parameters from the parsed URL.
  query = parseurl.query;
  // Check if the path of the request is "/weather".
  if (path === "/weather") {
    // Fetch weather data from the OpenWeatherMap API based on the city specified in the query parameters
    let weather = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        query.city +
        "&appid=7617b3eb9a4ab487de7ecc947cd4a2a9"
    );
    // Convert the response to JSON format
    let data = await weather.json();
    // Write the temperature in Celsius to the response
    res.write(JSON.stringify(data.main.temp - 273));
    // End the response
    res.end();
  }
});

// Start the server and listen on port 3000
server.listen(3000);
