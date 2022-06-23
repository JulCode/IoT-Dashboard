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
app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/templates.js"));
app.use("/api", require("./routes/webhooks.js"));
app.use("/api", require("./routes/emqxapi.js"));
app.use("/api", require("./routes/alarms.js"));
app.use("/api", require("./routes/dataprovider.js"));

module.exports = app;

//litener
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

//mongodb Connection
const mongoUserName = "devuser";
const mongoPassword = "devpassword";
const mongoHost = "localhost";
const mongoPort = "27017";
const mongoDatabase = "iotgl";

var uri =
  "mongodb://" +
  mongoUserName +
  ":" +
  mongoPassword +
  "@" +
  mongoHost +
  ":" +
  mongoPort +
  "/" +
  mongoDatabase;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  authSource: "admin"
};

mongoose.connect(uri, options).then(
  () => {
    console.log("MongoDB connected successfully".green);
  },
  err => {
    console.log("MongoDB connection error".red);
    console.log(err);
  }
);
