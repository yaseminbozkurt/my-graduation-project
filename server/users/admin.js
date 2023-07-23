
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/AkilliTarimDB");

const AdminSchema = mongoose.model("Admin", {
          name: String,
          email: String,
          password: String,
          specialkey: String

});

module.exports = AdminSchema;
