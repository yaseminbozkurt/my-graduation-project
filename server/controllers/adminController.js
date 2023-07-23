const AdminModel = require('../models/adminModel');
const register = async (req, res, next) => {
    try {
        const admin = new adminModel(req.body);
        console.log("denemeye geldik", admin);
        console.log(req.body)
        // const users = await User.find()
        const result = await admin.save()
        res.json(result)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });

    }
}
const login = async (req, res, next) => {
    try {
        const admin = await AdminModel.findOne({ "email": req.body.email })
        if (!user) {
            return res.status(401).json({ "message": "Email veya şifre yanlış!", code: 401 })
        }
        else if (user.password !== req.body.password) {
            return res.status(401).json({ "message": "Email veya şifre yanlış!", code: 401 })
        }
        return res.json(user)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });

    }
}


module.exports = { register, login }
