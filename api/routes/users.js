const express = require("express");
const router = express.Router();
//const jws = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");

//models import
import User from "../models/user";

router.get("/new-user", async (req, res) => {
  const user = await User.create({
    name: "John Doe",
    email: "example@core.com",
    password: "123456"
  });
});

module.exports = router;
