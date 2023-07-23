const express = require('express')
const userRoute = require('../routers/userRouter')
const router = express.router()

router.use("/register", userRoute)
console.log("denemes aaaa");
module.exports = router