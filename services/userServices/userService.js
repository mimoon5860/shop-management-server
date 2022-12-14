const UserModel = require("../../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();



// Register an user 
module.exports.createUser = async (registerInput) => {
    const checkUser = await UserModel.find({ $or: [{ email: registerInput.email }, { phone: registerInput.phone }] });

    if (checkUser.length) {
        return {
            success: false,
            message: "Email or Phone already exist"
        }
    }

    const salt = await bcrypt.genSalt(10);
    registerInput.password = await bcrypt.hash(registerInput.password, salt);
    const user = new UserModel(registerInput);
    await user.save();
    const token = jwt.sign({
        id: user.id,
        name: registerInput.name,
        email: registerInput.email,
        phone: registerInput.phone,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }, process.env.JWT_SECRET);

    return {
        success: true,
        data: {
            token,
            user: {
                id: user.id,
                name: registerInput.name,
                email: registerInput.email,
                phone: registerInput.phone,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        }
    }
}

// login an user
module.exports.loginUser = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        return {
            success: false,
            message: "No user found with this email"
        }
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return {
            success: false,
            message: "Invalid password"
        }
    }
    const token = jwt.sign({
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }, process.env.JWT_SECRET);

    return {
        success: true, data: {
            token, user: {
                id: user._id,
                name: user.name,
                phone: user.phone,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        }
    };
}