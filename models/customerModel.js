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
    address: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Archive'],
        default: 'Active'
    }
}, {
    timestamps: true
})

const CustomerModel = mongoose.model('Customer', customerSchema, 'customers');
module.exports = CustomerModel;