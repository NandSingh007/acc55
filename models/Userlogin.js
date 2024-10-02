// models/UserDetails.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    maxlength: 10
  },
  password: {
    type: String,
    required: true
  }
});

const UserLogin = mongoose.model("UserLogin", userSchema);
module.exports = UserLogin;
