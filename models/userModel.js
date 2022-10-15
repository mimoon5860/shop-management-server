const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide user name"],
    },
    phone: {
        type: String,
        required: [true, "Please provide user phone"]
    },
    email: {
        type: String,
        required: [true, "Please provide user email"]
    },
    password: {
        type: String,
        required: [true, "Please password"]
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', usersSchema, 'user');
module.exports = UserModel;