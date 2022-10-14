const SellerModel = require("../../models/sellerModel");

// create Seller
exports.createASeller = async (data) => {
    const seller = await SellerModel.create(data);
    await seller.save();
    return {
        success: true,
        data: seller
    };
}

// update a Seller 
exports.updateASeller = async (data) => {

}

// delete a Seller 
exports.deleteASeller = async (data) => {

}

// get all Seller
exports.getAllSeller = async () => {
    const sellers = await SellerModel.find({});
    return {
        success: true,
        data: sellers
    }
}