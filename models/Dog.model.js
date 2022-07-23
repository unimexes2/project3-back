const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const dogSchema = new Schema({
  name: String,
  breed: String,
  age: Number,
  weight: String,
  profilePicture: String,
  pictures: [String],
  description: String,
  admitionDate: Number,
  views: Number,
  adminID: [{ type: Schema.Types.ObjectId, ref: "Admin" }],
  contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
});

module.exports = model("Dog", dogSchema);
