const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/AkilliTarimDB");

const pdtSchema = mongoose.Schema({
    name: String,
    image: String,
    rating: Number,
    lowprice: Number,
    highprice: Number,
    category: String,
    quantity: Number,
    userID: String


}, {
    versionKey: false,
})
