const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/AkilliTarimDB");

const UserSchema = mongoose.model("User", {
  userName: String,
  userNumber: Number,
  eMail: String,
  password: String

});

module.exports = UserSchema;
