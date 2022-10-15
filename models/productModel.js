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
    sellCount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['Active', 'Archive'],
        default: 'Active'
    }
}, {
    timestamps: true,
})

const ProductModel = mongoose.model('Product', productSchema, 'product');
module.exports = ProductModel;