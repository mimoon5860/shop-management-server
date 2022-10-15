const ProductSellModel = require("../../models/productSellModel");
const { v4: uuidv4 } = require('uuid');
const { createInvoice } = require("../../utils/lib");
const InventoryModel = require("../../models/inventoryModel");
const ProductModel = require("../../models/productModel");

// sell a product
exports.sellProduct = async (data) => {
    const invoiceName = uuidv4();
    const { customer, product } = data;

    for (let i = 0; i < product.length; i++) {
        const checkInventory = await InventoryModel.findOne({ product: product[i].id, stock: { $lt: product[i].quantity } });
        if (checkInventory) {
            return {
                success: false,
                message: `Id: ${checkInventory.product} product is less stock then quantity`
            }
        }
    }

    const sellProductData = await ProductSellModel.create({ invoice: `${invoiceName}.pdf`, customer, product });
    await sellProductData.save();

    for (const item of product) {
        await InventoryModel.findOneAndUpdate({ product: item.id }, { $inc: { stock: -item.quantity } });
        await ProductModel.findByIdAndUpdate({ _id: item.id }, { $inc: { sellCount: +item.quantity } });
    }

    await createInvoice(data, invoiceName, sellProductData.id);
    return {
        success: true,
        id: sellProductData.id,
        message: "Sell product successfully"
    }

};

// get all product sell reports
exports.getAllSellProducts = async () => {
    const allSellProduct = await ProductSellModel.find();
    console.log(allSellProduct)
    return {
        success: true,
        data: allSellProduct
    }
};