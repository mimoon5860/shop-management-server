const easyinvoice = require('easyinvoice');
const fs = require('fs');
exports.createInvoice = async ({ product, customer }, invoiceName, sellProductId) => {
    const productForInvoice = product.map(item => {
        return {
            "quantity": item.quantity,
            "description": item.name,
            "tax-rate": 0,
            "price": item.sellPrice
        }
    });
    var data = {
        "currency": "USD",
        "marginTop": 25,
        "marginRight": 25,
        "marginLeft": 25,
        "marginBottom": 25,
        "sender": {
            "company": "Daylight Mart",
            "address": "Dhaka Bangladesh",
        },
        "client": {
            "company": customer.name,
            "address": customer.address,
        },
        "information": {
            "number": sellProductId,
            "date": new Date().toDateString(),
        },
        "products": productForInvoice,
        "bottomNotice": "Thank you for purchase!"
    };
    //Create your invoice! Easy!
    const result = await easyinvoice.createInvoice(data);
    fs.writeFileSync(`./invoices/${invoiceName}.pdf`, result.pdf, 'base64');
}