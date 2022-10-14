const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
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
    photo: {
        type: String
    }
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;