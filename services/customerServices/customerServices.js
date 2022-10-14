const CustomerModel = require("../../models/customerModel");

// create customer
exports.createACustomer = async (data) => {
    console.log(data)
    const customer = await CustomerModel.create(data);
    await customer.save();
    console.log(customer)
    return {
        success: true,
        data: customer
    };
}

// update a customer 
exports.updateACustomer = async (data) => {

}

// delete a customer 
exports.deleteACustomer = async (data) => {

}

// get all customer
exports.getAllCustomer = async () => {
    const customers = await CustomerModel.find({});
    return {
        success: true,
        data: customers
    }
}