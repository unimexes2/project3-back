const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mapSchema = new Schema({
  mapCode: String,
  description: String,
 
});

module.exports = model("Map", mapSchema);