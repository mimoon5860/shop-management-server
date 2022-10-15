const InventoryModel = require("../../models/inventoryModel");

// add product to inventory
exports.addProductToInventory = async (data) => {
    const { product, stock } = data;
    let newInventoryId = '';
    const checkInventory = await InventoryModel.findOne({ product });
    if (checkInventory) {
        const updateInventory = await InventoryModel.findOneAndUpdate({ product }, { stock: checkInventory.stock + stock });
        newInventoryId = updateInventory.id;
    } else {
        const inventory = await InventoryModel.create({ ...data, buyStock: stock });
        await inventory.save();
        newInventoryId = inventory.id;
    }
    return {
        success: true,
        id: newInventoryId,
        message: "Product stock added to inventory successfully!"
    };
}

// get all inventory products
exports.getAllInventoryProduct = async () => {
    const inventoryProducts = await InventoryModel.find().populate('product');
    return {
        success: true,
        data: inventoryProducts
    }
}