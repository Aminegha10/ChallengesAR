const fs = require("fs");
async function fetching(a) {
  let x = a.lat;
  let y = a.lng;
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      x +
      "&longitude=" +
      y +
      "&current_weather=true"
  );
  const data = await response.json();
  return data;
}
function selectRandomCity(cities) {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}
//Read the cities from the "input.txt" file
let datatxt = fs.readFileSync("./input.txt", "utf-8");
async function f(datatxt) {
  //Convert data from input.txt to format json
  let cities = JSON.parse(datatxt);
  //Read the random city name from the "input.txt" file
  let city = selectRandomCity(cities);
  //Retrieve the weather data for the chosen city.
  let tempjson = await fetching(city);
  //Retrieve the Temperature for the chosen city
  temptxt = JSON.stringify(tempjson.current_weather.temperature);
  // Delete any existing file for the chosen city.
  fs.unlink(city.name + ".txt", (err) => {
    if (err) {
      console.error("There is no file to delete");
    } else {
      console.log("File deleted successfully");
    }
  });
  //Write the temperature result into a new file named "cityname.txt".
  //fs.writeFileSync("./" + city.name + ".txt", temptxt);
  fs.writeFile("./" + city.name + ".txt", temptxt, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file written succefily");
    }
  });
  console.log(city.name, ":", temptxt);
}
//call of the function
f(datatxt);
