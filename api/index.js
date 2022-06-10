//requires
const express = require("express");

//instances
const app = express();

//litener
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

//endpoint
app.get("/", (req, res) => {
  res.send("Hello World");
});
