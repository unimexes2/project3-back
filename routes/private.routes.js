const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ObjectId = require('mongodb').ObjectId
const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.js")
const Map =require("../models/Map.model")

const fileUploader = require("../config/cloudinary.config");
const Stories = require("../models/Stories.model");

//  POST Creates a new dog for adoption

router.post("/adddog", (req, res, next) => {
  console.log(req.body);
  const {
    name,
    breed,
    age,
    weight,
    profilePicture,
    pictures,
    description,
    admitionDate,
    views,
  } = req.body;

  Dog.create({
    name,
    breed,
    age,
    weight,
    profilePicture,
    pictures,
    description,
    admitionDate,
    views,
  })
    .then((response) => {
      console.log(response);
      return res.json(response);
    })
    .catch((err) => res.json(err));
});

//  POST Creates a new cat for adoption
router.post("/addcat", (req, res, next) => {
  console.log(req.body);
  const {
    name,
    breed,
    age,
    weight,
    profilePicture,
    pictures,

    description,
    admitionDate,
    views,
  } = req.body;

  Cat.create({
    name,
    breed,
    age,
    weight,
    profilePicture,
    pictures,
    description,
    admitionDate,
    views,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.post("/addstory", (req, res, next) => {
  console.log(req.body);
  const { header, description, pictures, contactPerson } = req.body;

  Stories.create({ header, description, pictures, contactPerson })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.post("/addmap", (req, res, next) => {
  console.log(req.body);
  const { mapCode, description } = req.body;

  Map.create({ mapCode, description })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// DELETE  /cats/:catId  -  Deletes a specific cat by id
router.delete("/cats/:catId", (req, res, next) => {
  const { catId } = req.params;

  console.log(req.params);

  if (!mongoose.Types.ObjectId.isValid(catId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Cat.findByIdAndRemove(catId)
    .then(() =>
      res.json({
        message: `Project with ${projectId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});

// DELETE  /dogs/:dogId  -  Deletes a specific dog by id
router.delete("/dogs/:dogId", (req, res, next) => {
  const { dogId } = req.params;

  console.log(req.params);

  if (!mongoose.Types.ObjectId.isValid(dogId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Dog.findByIdAndRemove(dogId)
    .then(() =>
      res.json({ message: `Dog with ${projectId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

//  GET /dogs/:dogId -  Retrieves a specific DOG by id
router.get("/dogs/:dogId", (req, res, next) => {
  const { dogId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(dogId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  // console.log(dogId)
  Dog.findOne({ _id: ObjectId(dogId) })
    .then((dog) => {
      //console.log(req,dogId)

      res.status(200).json(dog);
    })
    .catch((error) => res.json(error));
});

// PUT dogs/:dogId  -  Updates a specific project by id
router.put("/dogs/:dogId", (req, res, next) => {
  const { dogId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(dogId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Dog.findByIdAndUpdate(dogId, req.body, { new: true })
    .then((updatedDog) => res.json(updatedDog))
    .catch((error) => res.json(error));
});

router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));

    return;
  }

  res.json({ fileUrl: req.file.path });
});
module.exports = router;
