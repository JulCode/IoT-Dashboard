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
    console.log("ERROR GETTING DEVICES");

    const toSend = {
      status: "error",
      error: error
    };

    return res.status(500).json(toSend);
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
    selectDevice(userId, newDevice.dId);

    const toSend = {
      status: "success"
    };
    res.json(toSend);
  } catch (error) {
    console.log("Error CREATING NEW DEVICE: " + error);

    const toSend = {
      status: "error",
      error: error
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
      error: error
    };
    return res.status(500).json(toSend);
  }
});
//update device
router.put("/device", checkAuth, async (req, res) => {
  const dId = req.body.dId;
  const userId = req.userData._id;

  if (selectDevice(userId, dId)) {
    const toSend = {
      status: "success"
    };
    return res.json(toSend);
  } else {
    const toSend = {
      status: "error"
    };
  }
});

/*-----------------fucntion--------------------*/
async function selectDevice(userId, dId) {
  try {
    const result = await Device.updateMany(
      { userId: userId },
      { selected: false }
    );
    const result2 = await Device.updateMany(
      { userId: userId, dId: dId },
      { selected: true }
    );
    return true;
  } catch (error) {
    console.log("Error SELECTING DEVICE: " + error);
    return false;
  }
}

module.exports = router;
