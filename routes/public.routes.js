const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.model.js")
const Stories= require("../models/Stories.model.js")
const Map =require("../models/Map.model.js")
const Donation=require("../models/Donation.model.js")
const Site=require("../models/Site.model.js")
// GET  Retrieves all of contacts
router.get("/contacts", (req, res, next) => {
    Contact.find()
      .then((allContacts) => res.json(allContacts))
      .catch((err) => res.json(err));
});
router.get("/donations", (req, res, next) => {
    Donation.find()
      .then((all) => res.json(all))
      .catch((err) => res.json(err));
});
router.get("/logo", (req, res, next) => {
  Site.find()
    .then((all) => res.json(all))
    .catch((err) => res.json(err));
});
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

router.get("/map", (req, res, next) => {
 Map.find()
    
    .then((mapUser) => res.json(mapUser))
    .catch((err) => res.json(err));
});

router.get("/stories", (req, res, next) => {
 Stories.find()
     
     .then((mapUser) => res.json(mapUser))
     .catch((err) => res.json(err));
 });

module.exports = router;