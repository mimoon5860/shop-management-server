const CustomerModel = require("../../models/customerModel");

// create customer
exports.createACustomer = async (data) => {
    console.log(data)
    const customer = await CustomerModel.create(data);
    await customer.save();
    return {
        success: true,
        data: customer
    };
}

// update a customer 
exports.updateACustomer = async (data) => {
    const { id, body } = data;
    const updatedCustomer = await CustomerModel.findOneAndUpdate({ _id: id }, body, { new: true });

    return {
        success: true,
        data: updatedCustomer
    }
}

// delete a customer 
exports.deleteACustomer = async (data) => {
    const { id } = data;
    const result = await CustomerModel.findByIdAndDelete({ _id: id });
    console.log(result);
    return {
        success: true,
        message: "Customer deleted Successfully"
    }
}

// get all customer
exports.getAllCustomer = async () => {
    const customers = await CustomerModel.find({});
    return {
        success: true,
        data: customers
    }
}