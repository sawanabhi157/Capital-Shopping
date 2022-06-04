const express = require("express");
const router = new express.Router();
const User = require("../models/userModel");

// CREATE PRODUCTS
router.post("/users", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);
    const createUser = await newUser.save();
    res.status(201).send(createUser);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET PRODUCT LIST
router.get("/users", async (req, res) => {
  try {
    const usersData = await User.find();
    res.send(usersData);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
