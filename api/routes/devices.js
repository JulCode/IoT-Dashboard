const express = require("express");
const router = express.Router();

//get all devices
router.get("/device", (req, res) => {
  console.log(req.query);
  var toReturn = {
    status: "ok",
    data: "a b c d e f"
  };
  res.json(toReturn);
});
//create new device
router.post("/device", (req, res) => {});
//delete device
router.delete("/device", (req, res) => {});
//update device
router.put("/device", (req, res) => {});

module.exports = router;
