const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();

const Restaurant = require("./models/restaurant");

const app = express();
const PORT = process.env.PORT || 5000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/restaurant-reviews");
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("db connected");
});

// middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/restaurant", async (req, res) => {
  const restaurant = new Restaurant({
    title: "Poe's",
    price: "$$",
    description:
      "An Edgar Allen Poe themed restaurant specializing in burgers.",
    location: "Atlantic Beach, Florida",
  });

  await restaurant.save();
  res.send(restaurant);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
