const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ObjectId = require('mongodb').ObjectId
const Cat = require("../models/Cat.model.js")
const Dog = require("../models/Dog.model.js")
const Contact = require("../models/Contact.model.js")
const Map =require("../models/Map.model")
const Site=require("../models/Site.model")
const fileUploader = require("../config/cloudinary.config");
const Stories = require("../models/Stories.model");
const Donation=require("../models/Donation.model");
const Admin=require("../models/Admin.model")
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
    sex
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
    sex
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

sex,

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
    sex,
    description,
    admitionDate,
    views,
    sex
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

router.get("/users", (req, res, next) => {
  console.log(req.body);
  const { header, description, pictures, contactPerson } = req.body;

  Admin.find()
    
    .then((mapUser) => res.json(mapUser))
    .catch((err) => res.json(err));
});



router.post("/adddonation", (req, res, next) => {
  console.log(req.body);
  const { bankName, account, paypal, bizum } = req.body;

  Donation.create({ bankName, account, paypal, bizum })
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
router.post("/settings", (req, res, next) => {
  console.log(req.body);
  const { navbarlogo} = req.body;

console.log(navbarlogo,"logo")
const  elemId  = "62e2dddb6a5a6365038a893d"

Site.updateMany({_id:elemId}, { $set: { navbarlogo: [] }}, function(err, affected){
  console.log('affected: ', affected);
})
.then(()=>{
Site.findByIdAndUpdate(
  elemId,
   { $push: req.body } , { new: true }  
 )
 .then((updated) => console.log("jjj",updated))
   .catch((error) => res.json(error))
 
})


});
router.put("/carousel", (req, res, next) => {
  const  elemId  = "62e2dddb6a5a6365038a893d"
  console.log(req.body);

  Site.updateMany({_id:elemId}, { $set: { carusel: [] }}, function(err, affected){
    console.log('affected: ', affected);
})
.then(()=>{

  Site.findByIdAndUpdate(
    elemId,
     { $push: req.body } , { new: true }  
   )
   .then((updated) => console.log("jjj",updated))
     .catch((error) => res.json(error))
   
    
   });


})
  








router.post("/addcontact", (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, email, phone, foto } = req.body;

  Contact.create({ firstName, lastName, email, phone, foto })
    .then((response) => {res.json(response)
    console.log(res.json)})

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


  router.delete("/user/:userId", (req, res, next) => {
    const { userId } = req.params;
  
    console.log(req.params);
  
    if (!mongoose.Types.ObjectId.isValid(catId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  



  Cat.findByIdAndRemove(catId)
    .then(() =>
      res.json({
        message: `Project with ${catId} is removed successfully.`,
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
      res.json({ message: `Dog with ${dogId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

// DELETE  /stories/:storieId  -  Deletes a specific storie by id
router.delete("/stories/:storieId", (req, res, next) => {
  const { storieId } = req.params;

  console.log(req.params);

  if (!mongoose.Types.ObjectId.isValid(storieId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Stories.findByIdAndRemove(storieId)
    .then(() =>
      res.json({ message: `Storie with ${storieId} is removed successfully.` })
    )
    .catch((error) => res.json(error));
});

// DELETE  /contacts/:contactId  -  Deletes a specific contact by id
router.delete("/contacts/:contactId", (req, res, next) => {
  const { contactId } = req.params;

  console.log(req.params);

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Contact.findByIdAndRemove(contactId)
    .then(() =>
      res.json({ message: `Storie with ${contactId} is removed successfully.` })
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

//  GET /cats/:catId -  Retrieves a specific CAT by id
router.get("/cats/:catId", (req, res, next) => {
  const { catId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(catId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Cat.findOne({ _id: ObjectId(catId) })
    .then((cat) => {

      res.status(200).json(cat);
    })
    .catch((error) => res.json(error));
});

//  GET /contacts/:contactId -  Retrieves a specific CONTACT by id
router.get("/contacts/:contactId", (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Contact.findOne({ _id: ObjectId(contactId) })
    .then((contact) => {

      res.status(200).json(contact);
    })
    .catch((error) => res.json(error));
});

// PUT dogs/:dogId  -  Updates a specific DOG by id
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

// PUT cats/:catId  -  Updates a specific CAT by id
router.put("/cats/:catId", (req, res, next) => {
  const { catId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(catId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Cat.findByIdAndUpdate(catId, req.body, { new: true })
    .then((updatedCat) => res.json(updatedCat))
    .catch((error) => res.json(error));
});

// PUT contacts/:contactId  -  Updates a specific CONTACT by id
router.put("/contacts/:contactId", (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    .then((updatedContact) => res.json(updatedContact))
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
