// backend/models/User.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/ // Exactly 10 digits
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /\S+@\S+\.\S+/ // Basic email validation
  },
  pancard: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/ // 5 letters, 4 digits, 1 letter
  },
  aadharcard: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{12}$/ // Exactly 12 digits
  },
  address: {
    type: String,
    required: true
  },
  otp: {
    type: String
  },
  otpExpires: {
    type: Date
  }
});

const FrontRegistrationData = mongoose.model(
  "FrontRegistrationschema",
  UserSchema
);
module.exports = FrontRegistrationData;
// module.exports = mongoose.model("FrontRegistrationData", userSchema);
