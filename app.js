const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
