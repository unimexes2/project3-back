const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const siteSchema = new Schema({
logo: String,
  navbarlogo: String,
  devise: String

});

module.exports = model("Site", siteSchema);
