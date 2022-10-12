const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide customer name"],
    },
    phone: {
        type: String,
        required: [true, "Please provide customer phone"]
    },
    photo: {
        type: String,
    },
    address: {
        address: { type: String },
        city: { type: String },
        required: [true, "Please provide customer address"]
    }
}, {
    timestamp: true
})

const CustomerModel = mongoose.model('Customer', customerSchema);
module.exports = CustomerModel;