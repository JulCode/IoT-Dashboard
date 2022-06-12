const express = require("express");
const router = express.Router();
//const jws = require("jsonwebtoken");
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
router.post("/login", (req, res) => {});

router.get("/new-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "John Doe",
      email: "examples@core.com",
      password: "123456"
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error" });
    console.log(error);
  }
});

module.exports = router;
