const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide product name"],
    },
    details: {
        type: String,
        required: [true, "Please provide product details"]
    },
    purchasePrice: {
        type: Number,
        required: [true, "Please provide product purchase price"]
    },
    sellCount: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Active', 'Archive'],
        default: 'Active'
    }
}, {
    timestamps: true,
})

const ProductModel = mongoose.model('Product', productSchema, 'products');
module.exports = ProductModel;