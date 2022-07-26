const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const storiesSchema = new Schema({
  header: String,
  description: String,
  pictures: [],
 /// contactPerson: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
});

module.exports = model("Stories", storiesSchema);