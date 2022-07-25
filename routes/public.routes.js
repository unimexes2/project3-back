const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.js")
const Stories= require("../models/Stories.model.js")
const Map =require("../models/Map.model.js")

// GET  Retrieves all of dogs
router.get("/dogs", (req, res, next) => {
    Dog.find()
      .populate("Contact")
      .then((allDogs) => res.json(allDogs))
      .catch((err) => res.json(err));
});

// GET  Retrieves all of cats
router.get("/cats", (req, res, next) => {
    Cat.find()
      .populate("Contact")
      .then((allCats) => res.json(allCats))
      .catch((err) => res.json(err));
});
router.get("/stories", (req, res, next) => {
  Stories.find()
    
    .then((allStories) => res.json(allStories))
    .catch((err) => res.json(err));
});
router.get("/map", (req, res, next) => {
 Map.find()
    
    .then((mapUser) => res.json(mapUser))
    .catch((err) => res.json(err));
});



module.exports = router;