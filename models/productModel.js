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
    sellPrice: {
        type: Number,
        required: [true, "Please provide product sell price"]
    }
}, {
    timestamp: true
})

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel;