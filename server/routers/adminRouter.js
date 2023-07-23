const express = require('express')

const adminController = require('../controllers/adminController')
const router = express.Router()
router.post('/register', adminController.register)
router.post('/login', adminController.login)
console.log("admin başlanıldı");

module.exports = router