const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  dogsadded: [{ type: Schema.Types.ObjectId, ref: "Dog" }],
  catsadded: [{ type: Schema.Types.ObjectId, ref: "Cat" }]
});

module.exports = model("Admin", adminSchema);
