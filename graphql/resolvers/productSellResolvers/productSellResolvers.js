const { UserInputError } = require("apollo-server-express");
const { sellProduct, getAllSellProducts, getAllSellProductsByDate, getAllSellProductByCustomerName, getAllSellProductByProductName } = require("../../../services/productSellServices/productSellServices");

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
        getAllSellProductByCustomerName: async (_parent, { sellProductByCustomerName }) => {
            try {
                const result = await getAllSellProductByCustomerName(sellProductByCustomerName);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }

        },

        // get all sell products by product name
        getAllSellProductByProductName: async (_parent, { sellProductByProductName }) => {
            try {
                const result = await getAllSellProductByProductName(sellProductByProductName);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        }
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