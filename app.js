const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('./server/routers/userRouter');
const adminRouter = require('./server/routers/adminRouter');
const axios = require('axios');




// app.js

const bodyParser = require('body-parser');
const orderModel = require('./server/models/orderModel');
const ObjectId = require('mongodb').ObjectId;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/orders/:id', (req, res) => {
    const orderId = req.params.id;
    MongoClient.connect(url, (err, client) => {
        if (err) throw err;
        const db = client.db(dbName);
        const collection = db.collection('orders');
        collection.findOne({ _id: ObjectId(orderId) }, (err, result) => {
            if (err) throw err;
            client.close();
            res.send(result);
        });
    });
});






mongoose.connect('mongodb://localhost:27017/AkilliTarimDB');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("mongodb bağlantısı sağlandı");
})

app.use("/assets", express.static('assets'));

app.use(express.urlencoded());
app.use(express.json());

app.use('/user', userRouter)
app.use('/admin', adminRouter)


app.get("/", function (req, res) {
    res.sendFile("./index.html", { root: path.join(__dirname) },);
});



app.get("/index.html", function (req, res) {
    res.sendFile("./index.html", { root: path.join(__dirname) },);
});
app.get("/views/html.html", function (req, res) {
    res.sendFile("./views/html.html", { root: path.join(__dirname) },);
});
app.get("/views/about.html", function (req, res) {
    res.sendFile("./views/about.html", { root: path.join(__dirname) },);
});

app.get("/views/video.mp4", function (req, res) {
    res.sendFile("./views/video.mp4", { root: path.join(__dirname) },);
});

app.get("/views/pesticides/herbisitler.html", function (req, res) {
    res.sendFile("views/pesticides/herbisitler.html", { root: path.join(__dirname) },);
});

app.get("/views/pesticides/fungusitler.html", function (req, res) {
    res.sendFile("views/pesticides/fungusitler.html", { root: path.join(__dirname) },);
});

app.get("/views/pesticides/insektisitler.html", function (req, res) {
    res.sendFile("views/pesticides/insektisitler.html", { root: path.join(__dirname) },);
});
app.get("/views/seeds.html", function (req, res) {
    console.log("a")
    res.sendFile("views/seeds.html", { root: path.join(__dirname) },);
});
app.get("/views/gubreler.html", function (req, res) {
    res.sendFile("/views/gubreler.html", { root: path.join(__dirname) },);
});
app.get("/views/contact.html", function (req, res) {
    res.sendFile("/views/contact.html", { root: path.join(__dirname) },);
});

app.get("/views/cart.html", function (req, res) {
    res.sendFile("/views/html/cart.html", { root: path.join(__dirname) },);
});

app.get("/views/wishlist.html", function (req, res) {
    res.sendFile("/views/html/wishlist.html", { root: path.join(__dirname) },);
});

app.get("/views/pesticides/wishlist.html", function (req, res) {
    res.sendFile("/views/html/wishlist.html", { root: path.join(__dirname) },);
});

app.get("/views/pesticides/cart.html", function (req, res) {
    res.sendFile("/views/html/cart.html", { root: path.join(__dirname) },);
});

app.get("/views/html/wishlist.html", function (req, res) {
    res.sendFile("/views/html/wishlist.html", { root: path.join(__dirname) },);
});


app.get("/views/html/cart.html", function (req, res) {
    res.sendFile("/views/html/cart.html", { root: path.join(__dirname) },);
});


app.get("/views/checkout.html", function (req, res) {
    res.sendFile("/views/html/checkout.html", { root: path.join(__dirname) },);
});
app.get("/views/html/checkout.html", function (req, res) {
    res.sendFile("/views/html/checkout.html", { root: path.join(__dirname) },);
});

app.get("/views/payment.html", function (req, res) {
    res.sendFile("/views/html/payment.html", { root: path.join(__dirname) },);
});
app.get("/views/html/payment.html", function (req, res) {
    res.sendFile("/views/html/payment.html", { root: path.join(__dirname) },);
});
app.get("/views/html/otp.html", function (req, res) {
    res.sendFile("/views/html/otp.html", { root: path.join(__dirname) },);
});
app.post("/views/istek-ve-onerileriniz.html", function (req, res) {
    res.sendFile("/views/istek-ve-onerileriniz.html", { root: path.join(__dirname) },);
});

app.get("/admin", function (req, res) {

    res.sendFile("/views/Admin/register.html", { root: path.join(__dirname) },);
});

app.get("/Admin/CRUD.html", function (req, res) {
    res.sendFile("/views/Admin/CRUD.html", { root: path.join(__dirname) },);
});

app.get("/views/Admin/product.html", function (req, res) {
    res.sendFile("/views/Admin/product.html", { root: path.join(__dirname) },);
});

app.get("/views/Admin/product.html", function (req, res) {
    res.sendFile("/views/Admin/product.html", { root: path.join(__dirname) },);
});

app.get("/views/Admin/cart.html", function (req, res) {
    res.sendFile("/views/Admin/cart.html", { root: path.join(__dirname) },);
});
app.get("/javascript/adminregister.js", function (req, res) {
    res.sendFile("/javascript/adminregister.js", { root: path.join(__dirname) },);
});



app.get("/javascript/adminCRUD.js", function (req, res) {
    res.sendFile("/javascript/adminCRUD.js", { root: path.join(__dirname) },);
});


app.post("http://localhost:3000/views/seeds.html", function (req, res) {
    res.sendFile("/javascript/adminCRUD.js", { root: path.join(__dirname) },);
});



app.get("/admine", function (req, res) {
    res.sendFile("/views/admine/admine.html", { root: path.join(__dirname) },);
});

app.get("/javascript/admine.js", function (req, res) {
    res.sendFile("/javascript/admine.js", { root: path.join(__dirname) },);
});

app.get("/views/Admin/CRUD.html", function (req, res) {
    res.sendFile("/views/Admin/CRUD.html", { root: path.join(__dirname) },);
});


app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server Listening")

});
