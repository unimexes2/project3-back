const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.js")

// GET  Retrieves all of dogs
router.get("/dogs", (req, res, next) => {
    Project.find()
      .populate("Contact")
      .then((allDogs) => res.json(allDogs))
      .catch((err) => res.json(err));
});

// GET  Retrieves all of cats
router.get("/cats", (req, res, next) => {
    Project.find()
      .populate("Contact")
      .then((allCats) => res.json(allCats))
      .catch((err) => res.json(err));
});



module.exports = router;