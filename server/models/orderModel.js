const mongoose = require('mongoose')

const Order = new mongoose.Schema({
          nameSurname: {
                    type: String,
                    require: true
          },
          userTel: {
                    type: String,
                    require: true
          },
          product: {
                    type: String,
                    require: true
          },
          price: {
                    type: String,
                    require: true
          },
          orderTime: {
                    type: String,
                    require: true
          },
          address: {
                    type: String,
                    require: true
          },
          transportationStatus: {
                    type: String,
                    require: true
          }
})

module.exports = mongoose.model("Orders", Order)
