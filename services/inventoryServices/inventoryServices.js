const InventoryModel = require("../../models/inventoryModel");

// add product to inventory
exports.addProductToInventory = async (data) => {
    console.log({ data })
    const inventory = await InventoryModel.create(data);
    await inventory.save();
    return {
        success: true,
        data: inventory
    };
}

// get all inventory products
exports.getAllInventoryProduct = async () => {
    const inventoryProducts = await InventoryModel.find().populate('products');
    return {
        success: true,
        data: inventoryProducts
    }
}