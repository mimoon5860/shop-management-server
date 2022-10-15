const { UserInputError } = require("apollo-server-express");
const { sellProduct, getAllSellProducts, getAllSellProductsByDate } = require("../../../services/productSellServices/productSellServices");

const productSellResolvers = {
    Query: {
        // get all sell products
        getAllSellProduct: async () => {
            try {
                const result = await getAllSellProducts();
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // get all sell products by date 
        getAllSellProductByDate: async (_parent, { sellProductByDate }) => {
            try {
                const result = await getAllSellProductsByDate(sellProductByDate);
                console.log(result)
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // get all sell products by customer name 
        getAllSellProductByCustomerName: async () => { },

        // get all sell products by product name
        getAllSellProductByProductName: async () => { }
    },
    Mutation: {
        // sell product
        sellProduct: async (_parent, { sellProductInput }) => {
            try {
                const result = await sellProduct(sellProductInput);
                if (result.success) {
                    return result;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        }
    }
}

module.exports = productSellResolvers;