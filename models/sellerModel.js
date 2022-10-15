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
    address: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Archive'],
        default: 'Active'
    }
}, {
    timestamps: true
})

const SellerModel = mongoose.model('Seller', sellerSchema, 'seller');
module.exports = SellerModel;