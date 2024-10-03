const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Connected");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
