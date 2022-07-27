const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const donationSchema = new Schema({
    bankName: String,
    account: String,
    paypal: String,
    bizum: String,

});
//https://www.paypal.com/donate/?hosted_button_id=B87W4V3P9SXEQ
module.exports = model("Donation", donationSchema);
