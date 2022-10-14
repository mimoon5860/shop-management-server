const { UserInputError } = require("apollo-server-express");
const { createASeller, getAllSeller } = require("../../../services/sellerServices/sellerServices");

const sellerResolvers = {
    Query: {
        getAllSeller: async () => {
            try {
                const result = await getAllSeller();
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
        // create a seller
        createASeller: async (_parent, { createASellerInput }, _context, _info) => {
            try {
                const result = await createASeller(createASellerInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },
    }
}

module.exports = sellerResolvers;