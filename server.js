const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 8080;

const app = express();

app.use(cors());

const data = require("./data/weather.json");

app.get("./data/weather", (request, response) => {
  const lat = findLat(request.query.lat);
  response.json(lat);
});

const ldon = findLong(request.query.long);
response.json(games);

const searchQuery = findSearchQuery(request.query.searchQuery);
response.json(games);

lat long searchQuery

function findGameByYear(year) {
  return data.filter((game) => game.year == year || !year);
}

app.get("/", (request, response) => {
  response.json("You are looking at my root route...");
});
app.get("/games", (request, response) => {
  const games = findGameByYear(request.query.year);
  response.json(games);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
