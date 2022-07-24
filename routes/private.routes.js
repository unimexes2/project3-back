


const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.js")
const fileUploader = require("../config/cloudinary.config");
//  POST Creates a new dog for adoption
router.post('/adddog', (req, res, next) => {
  console.log(req.body)
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

	Dog.create({ name, breed, age, weight, profilePicture, pictures, description, admitionDate, views})
		.then((response) => {
      
      console.log(response)
      return res.json(response)})
		.catch((err) => res.json(err));
});

//  POST Creates a new cat for adoption
router.post('/addcat', (req, res, next) => {
  console.log(req.body)
	const { 
        name, 
        breed, 
        age, 
        weight, 
        profilePicture, 
        pictures,
        description, 
        admitionDate, 
        views
    
    } = req.body;

	Cat.create({ name, breed, age, weight, profilePicture, pictures, description, admitionDate, views})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.post('/addstories', (req, res, next) => {
  console.log(req.body)
	const { 
    header,
    description,
    pictures,
    contactPerson
    
    } = req.body;

	Stories.create({ header,description,pictures,contactPerson})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

router.post('/addmap', (req, res, next) => {
  console.log(req.body)
	const { 
    mapCode,
  description
    
    } = req.body;

	Stories.create({ mapCode,description})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});








router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {

    console.log("file is: ", req.file)
  
   
  
    if (!req.file) {
  
      next(new Error("No file uploaded!"));
  
      return;
  
    }
  
    
  
    // Get the URL of the uploaded file and send it as a response.
  
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
  
    
  
    res.json({ fileUrl: req.file.path });
  
  });
module.exports = router; 