const { UserInputError } = require("apollo-server-express");
const { createProductService, getAllProduct } = require("../../../services/productServices/productServices");

const productResolvers = {
    Query: {
        getAllProduct: async () => {
            try {
                const result = await getAllProduct();
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
        // create a product
        createAProduct: async (_parent, { createProductInput }, _context, _info) => {
            try {
                const result = await createProductService(createProductInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        }
    }
}

module.exports = productResolvers;