const mongoose = require('mongoose');
const ProductModel = require('./productModel');

const inventorySchema = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    stock: {
        type: Number
    }
}, {
    timestamps: true,
})

const InventoryModel = mongoose.model('Inventory', inventorySchema, 'inventories');
module.exports = InventoryModel;