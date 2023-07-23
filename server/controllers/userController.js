const UserModel = require('../models/userModel');
const register = async (req, res, next) => {
    try {
        const user = new UserModel(req.body);
        console.log("denemeye geldik", user);
        console.log(req.body)
        // const users = await User.find()
        const result = await user.save()
        res.json(result)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });

    }
}
const login = async (req, res, next) => {
    try {
        const user = await UserModel.findOne({ "email": req.body.email })
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
