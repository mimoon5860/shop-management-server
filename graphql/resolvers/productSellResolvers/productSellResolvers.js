const { UserInputError } = require("apollo-server-express");
const { sellProduct, getAllSellProducts } = require("../../../services/productSellServices/productSellServices");

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