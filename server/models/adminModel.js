// const mongoose = require('mongoose');

// const adminSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },
//     specialkey: {
//         type: String,
//         require: true
//     }
// })
// // const AdminModel = mongoose.model('admin', adminSchema)
// module.exports = mongoose.model("Admin", adminSchema)

const mongoose = require('mongoose')

const Admin = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    specialkey: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("Admins", Admin)
