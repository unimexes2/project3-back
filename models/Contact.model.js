const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contacSchema = new Schema({
  firstName: String,
  lastName: String,

  email:String,


  phone: Number,
  foto:[String]
});

module.exports = model("Contact", contacSchema);
