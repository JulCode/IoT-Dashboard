const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middlewares/authentication");

//MODELS
import Device from "../models/device";
//API

//get all devices
router.get("/device", checkAuth, (req, res) => {});
//create new device
router.post("/device", (req, res) => {});
//delete device
router.delete("/device", (req, res) => {});
//update device
router.put("/device", (req, res) => {});

//Function

module.exports = router;
