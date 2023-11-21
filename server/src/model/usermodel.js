const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    email: String,
    googleId: String,
    userPassword: String,
    userProfile: String,
    userPhoneNumber: Number
  },
  { timestamps: true }
);

const userDataModel = mongoose.model("user-data", userSchema);
module.exports = userDataModel;
