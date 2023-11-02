const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 8080;

const app = express();

app.use(cors());
app.get("/", (request, response) => response.json("Root route."));

// app.listen(PORT, () => console.log(`app is running on port ${PORT}`));

const data = require("./data/weather.json");

app.get("/weather", (request, response) => {
  const lat = request.query.lat;
  const lon = request.query.lon;
  const searchQuery = request.query.searchQuery;

  const filteredCity = data.find((city) => {
    return (
      city.city_name === searchQuery
      // && city.lat === lat && city.lon === lon
    );
  });

  const wrangledData = filteredCity.data.map((day) => {
    return {
      description: day.weather.description,
      date: day.datetime,
    };
  });
  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
// app.get("./data/weather", (request, response) => {
//   const lat = findLat(request.query.lat);
//   response.json(lat);
// });

// const ldon = findLong(request.query.long);
// response.json(games);

// const searchQuery = findSearchQuery(request.query.searchQuery);
// response.json(games);

// //lat long searchQuery

// function findGameByYear(year) {
//   return data.filter((game) => game.year == year || !year);
// }

// app.get("/", (request, response) => {
//   response.json("You are looking at my root route...");
// });
// app.get("/games", (request, response) => {
//   const games = findGameByYear(request.query.year);
//   response.json(games);
// });
