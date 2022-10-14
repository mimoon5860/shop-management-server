const ProductModel = require("../../models/productModel");

// create a product
exports.createProductService = async (data) => {
    const product = await ProductModel.create(data);
    await product.save();
    return {
        success: true,
        data: product
    };
}

// update a Product 
exports.updateAProduct = async (data) => {

}

// delete a Product 
exports.deleteAProduct = async (data) => {

}

// get all Product
exports.getAllProduct = async () => {
    const products = await ProductModel.find({});
    return {
        success: true,
        data: products
    }
}