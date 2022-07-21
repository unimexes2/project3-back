const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.js")

//  POST Creates a new dog for adoption
router.post('/addDog', (req, res, next) => {
	const { 
        name, 
        breed, 
        age, 
        weight, 
        profilePicture, 
        pictures:[], 
        description, 
        admitionDate, 
        views,
    
    } = req.body;

	Dog.create({ name, breed, age, weight, profilePicture, pictures:[], description, admitionDate, views})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

//  POST Creates a new cat for adoption
router.post('/addCat', (req, res, next) => {
	const { 
        name, 
        breed, 
        age, 
        weight, 
        profilePicture, 
        pictures:[], 
        description, 
        admitionDate, 
        views
    
    } = req.body;

	Cat.create({ name, breed, age, weight, profilePicture, pictures:[], description, admitionDate, views})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

module.exports = router; 