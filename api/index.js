//requires
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");

//instances
const app = express();

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//express routes
app.use("/api", require("./routes/devices.js"));

module.exports = app;

//litener
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

//endpoint
app.get("/", (req, res) => {
  res.send("bye dude");
});
