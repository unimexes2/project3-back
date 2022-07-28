const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const siteSchema = new Schema({
  logo: String,
  navbarlogo: [String],
  carusel:[String]
 

});

module.exports = model("Site", siteSchema);
