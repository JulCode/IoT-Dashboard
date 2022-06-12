const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication");

/*-----------------MODELS--------------------*/
import Device from "../models/device";
/*-----------------API--------------------*/

//get all devices
router.get("/device", checkAuth, async (req, res) => {});
//create new device
router.post("/device", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;
    var newDevice = req.body.newDevice;

    console.log(newDevice);

    newDevice.userId = userId;
    newDevice.createdTime = Date.now();

    const device = await Device.create(newDevice);

    const toSend = {
      status: "success"
    };
    res.json(toSend);
  } catch (error) {
    console.log("Error CREATING NEW DEVICE: " + error);

    const toSend = {
      status: "error",
      message: error.message
    };
    return res.status(500).json(toSend);
  }
});
//delete device
router.delete("/device", (req, res) => {});
//update device
router.put("/device", (req, res) => {});

/*-----------------fucntion--------------------*/

module.exports = router;
