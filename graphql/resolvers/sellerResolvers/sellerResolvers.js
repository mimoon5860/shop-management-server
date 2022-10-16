const { UserInputError } = require("apollo-server-express");
const { createASeller, getAllSeller, updateASeller, deleteASeller } = require("../../../services/sellerServices/sellerServices");

const sellerResolvers = {
    Query: {
        // get all seller
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
        createASeller: async (_parent, { createASellerInput }) => {
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

        // update a seller
        updateASeller: async (_parent, { updateASellerInput }) => {
            try {
                const result = await updateASeller(updateASellerInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // delete a seller
        deleteASeller: async (_parent, { deleteASellerInput }) => {
            try {
                const result = await deleteASeller(deleteASellerInput);
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

module.exports = sellerResolvers;