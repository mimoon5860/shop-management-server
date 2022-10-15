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
    const { id, body } = data;
    const updatedSeller = await SellerModel.findOneAndUpdate({ _id: id }, body, { new: true });

    return {
        success: true,
        data: updatedSeller
    }
}

// delete a Seller 
exports.deleteASeller = async (data) => {
    const { id } = data;
    const result = await SellerModel.findByIdAndDelete({ _id: id });
    console.log(result);
    return {
        success: true,
        message: "Seller deleted Successfully"
    }
}

// get all Seller
exports.getAllSeller = async () => {
    const sellers = await SellerModel.find({});
    return {
        success: true,
        data: sellers
    }
}