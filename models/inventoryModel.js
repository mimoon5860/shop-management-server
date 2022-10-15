const mongoose = require('mongoose');
const ProductModel = require('./productModel');

const inventorySchema = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    purchasePrice: {
        type: Number,
        required: [true, "Please provide product purchase price"]
    },
    stock: {
        type: Number
    }
}, {
    timestamps: true,
})

const InventoryModel = mongoose.model('Inventory', inventorySchema, 'inventory');
module.exports = InventoryModel;