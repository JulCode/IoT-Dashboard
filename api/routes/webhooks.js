const express = require("express");
const axios = require("axios");
const router = express.Router();
const colors = require("colors");

router.post("/saver-webhook", async (req, res) => {
  const data = req.body;
  console.log(data);
});

module.exports = router;
