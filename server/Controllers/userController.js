const userModel = require("../Models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator")

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY

    return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" })
}

const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body

        let user = await userModel.findOne({ email });

        if (user)
            return res.status(400).json("User already exists")

        if (!name || !email || !password)
            return res.status(400).json("All fields are required")

        if (!validator.isStrongPassword(password))
            return res.status(400).json("Password must be strong ")

        user = new userModel({ name, email, password })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        await user.save()

        const token = createToken(user.id)

        res.status(200).json({ _id: user.id, name, email, token })

    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });

        if (!user) return res.status(400).json("Invalid email or password");

        const isValidPass = await bcrypt.compare(password, user.password);

        if (!isValidPass) return res.status(400).json("Invalid email or password");

        const token = createToken(user.id)

        res.status(200).json({ _id: user.id, name: user.name, email, token })
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const findUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await userModel.findById(userId)

        res.status(200).json(user)
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()

        res.status(200).json(users)
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { registerUser, loginUser, findUser, getUsers };