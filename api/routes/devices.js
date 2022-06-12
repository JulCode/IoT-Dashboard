const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication");

/*-----------------MODELS--------------------*/
import Device from "../models/device";
/*-----------------API--------------------*/

//get all devices
router.get("/device", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;
    const devices = await Device.find({ userId: userId });

    const toSend = {
      status: "success",
      data: devices
    };
    res.json(toSend);
  } catch (error) {
    console.log("Error GETTING DEVICES", error);
    const toSend = {
      status: "error",
      message: error
    };
    res.status(500).json(toSend);
  }
});
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
router.delete("/device", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;
    const dId = req.query.dId;

    const result = await Device.deleteOne({ userId: userId, dId: dId });

    const toSend = {
      status: "success",
      data: result
    };
    return res.json(toSend);
  } catch (error) {
    console.log("Error DELETING DEVICE: " + error);

    const toSend = {
      status: "error",
      message: error.message
    };
    return res.status(500).json(toSend);
  }
});
//update device
router.put("/device", (req, res) => {});

/*-----------------fucntion--------------------*/

module.exports = router;
