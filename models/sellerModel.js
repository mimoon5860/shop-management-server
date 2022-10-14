const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide seller name"],
    },
    phone: {
        type: String,
        required: [true, "Please provide seller phone"]
    },
    photo: {
        type: String,
    },
    address: {
        type: String
    },
    email: {
        type: String
    }
}, {
    timestamps: true
})

const SellerModel = mongoose.model('Seller', sellerSchema);
module.exports = SellerModel;