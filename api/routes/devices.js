const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication");

//get all devices
router.get("/device", checkAuth, (req, res) => {
  console.log(req.userData);

  res.status(200).json({
    status: "success"
  });
});
//create new device
router.post("/device", (req, res) => {});
//delete device
router.delete("/device", (req, res) => {});
//update device
router.put("/device", (req, res) => {});

module.exports = router;
