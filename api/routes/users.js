const express = require("express");
const router = express.Router();
//const jws = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");

//models import
import User from "../models/user";

//AUTH
router.post("/register", (req, res) => {}); // create new user
router.post("/login", (req, res) => {}); // login user

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
