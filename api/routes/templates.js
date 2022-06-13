const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authentication");

//model import
import Template from "../models/template";

router.post("/template", checkAuth, async (req, res) => {
  try {
    const userId = req.userData._id;

    var newTemplate = req.body.template;
    newTemplate.userId = userId;
    newTemplate.createdTime = Date.now();

    const r = await Template.create(newTemplate);

    const response = {
      status: "success"
    };
    return res.json(response);
  } catch (error) {
    console.log(error);
    const response = {
      status: "error",
      error: error
    };
    return res.status(500).json(response);
  }
});

module.exports = router;
