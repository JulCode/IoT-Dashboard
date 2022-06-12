const express = require("express");
const router = express.Router();
const jws = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//models import
import User from "../models/user";

//POST -> req.body
//GET -> req.query

//AUTH
// create new user
router.post("/register", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      name: name,
      email: email,
      password: encryptedPassword
    };
    const user = await User.create(newUser);
    const toSend = {
      status: "ok"
    };
    res.json(toSend);
  } catch (error) {
    console.log("Error - register endpoint ", error);

    const toSend = {
      status: "error",
      message: error.message
    };
    res.status(500).json(toSend);
  }
});

// login user
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var user = await User.findOne({ email: email });
  if (!user) {
    const toSend = {
      status: "error",
      message: "Invalid Credentials"
    };
    return res.status(401).json(toSend);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    const toSend = {
      status: "error",
      message: "Invalid Credentials"
    };
    return res.status(401).json(toSend);
  } else {
    user.set("password", undefined, { strict: false });
    const token = jws.sign({ userData: user }, "securePassword", {
      expiresIn: 60 * 60 * 24 * 30
    });
    const toSend = {
      status: "ok",
      token: token,
      userData: user
    };
    return res.json(toSend);
  }
});

module.exports = router;
