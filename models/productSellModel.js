const mongoose = require('mongoose');

const productSellSchema = new mongoose.Schema({
    customer: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: [true, "Please provide customer id"],
        },
        name: {
            type: String,
            required: [true, "Please provide customer name"]
        },
        address: {
            type: String,
            required: [true, "Please provide customer address"]
        },
        phone: {
            type: Number,
            required: [true, "Please provide customer name"]
        }
    },
    product: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Please provide product id"],
        },
        name: { type: String, required: [true, "Please privide product name"] },
        quantity: { type: Number, required: [true, "Please provide product quantity"] },
        sellPrice: {
            type: Number,
            required: [true, "Please provide product purchase price"]
        },
    }],
    date: { type: Date, default: Date.now },
    invoice: {
        type: String,
        required: [true, "Please provide invoice"]
    }
}, {
    timestamps: true,
})

const ProductSellModel = mongoose.model('ProductSell', productSellSchema, 'productSell');
module.exports = ProductSellModel;