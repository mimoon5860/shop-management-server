const InventoryModel = require("../../models/inventoryModel");
const ProductModel = require("../../models/productModel");
const ProductSellModel = require("../../models/productSellModel")

// get dashboard summery
exports.getDashboardSummery = async () => {
    const sellProducts = await ProductSellModel.find();
    const totalInventory = await InventoryModel.find();
    const bestSellingProduct = await ProductModel.find().sort({ "sellCount": -1 }).limit(1);
    let totalSellCount = 0;
    let totalSellAmount = 0;
    let totalBuyCount = 0;
    let totalBuyAmount = 0;

    sellProducts.forEach(sellItem => {
        sellItem.product.forEach(sellProduct => {
            totalSellCount += sellProduct.quantity;
            totalSellAmount += sellProduct.quantity * sellProduct.sellPrice;
        })
    })

    totalInventory.forEach(inventItem => {
        totalBuyCount += inventItem.buyStock;
        totalBuyAmount += inventItem.buyStock * inventItem.purchasePrice
    })

    return {
        success: true,
        data: {
            totalSell: {
                total: totalSellCount,
                amount: totalSellAmount
            },
            totalBuy: {
                total: totalBuyCount,
                amount: totalBuyAmount
            },
            profit: totalSellAmount - totalBuyAmount,
            bestSellingProduct: bestSellingProduct[0]
        }
    }
}