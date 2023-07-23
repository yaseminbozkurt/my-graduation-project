const mongoose = require('mongoose')

const User = new mongoose.Schema({
          nameSurname: {
                    type: String,
                    require: true
          },
          userTel: {
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
          }
})

module.exports = mongoose.model("Users", User)
