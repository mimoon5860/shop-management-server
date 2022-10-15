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
    const { id, body } = data;
    const updatedProduct = await ProductModel.findOneAndUpdate({ _id: id }, body, { new: true });

    return {
        success: true,
        data: updatedProduct
    }
}

// delete a Product 
exports.deleteAProduct = async (data) => {
    const { id } = data;
    const result = await ProductModel.findByIdAndDelete({ _id: id });
    console.log(result);
    return {
        success: true,
        message: "Product deleted Successfully"
    }
}

// get all Product
exports.getAllProduct = async () => {
    const products = await ProductModel.find({});
    return {
        success: true,
        data: products
    }
}