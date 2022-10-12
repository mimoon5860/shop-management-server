const ProductModel = require("../../models/productModel");
const asyncWrapper = require("../../utils/asyncWarpper");

exports.createProductService = asyncWrapper(async (data) => {
    const product = await ProductModel.create(data);
    return product;
})