const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    purchasePrice: {
        type: Number,
        required: [true, "Please provide product purchase price"]
    },
    buyStock: { type: Number, required: [true, "Please provide how many product you buy"] },
    stock: {
        type: Number,
        required: [true, "Please provide product stock"]
    }
}, {
    timestamps: true,
})

const InventoryModel = mongoose.model('Inventory', inventorySchema, 'inventory');
module.exports = InventoryModel;