const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const catSchema = new Schema({
  name: String,
  breed: String,
  age: Number,
  weight: String,
  profilePicture: String,
  pictures: [],
  description: String,
  admitionDate: String,
  views: Number,
  isAdopted:Boolean,
  sex:String,
  adminID: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
});

module.exports = model("Cat", catSchema);