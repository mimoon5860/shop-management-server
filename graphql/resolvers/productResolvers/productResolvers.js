const { UserInputError } = require("apollo-server-express");
const { createProductService, getAllProduct, updateAProduct, deleteAProduct } = require("../../../services/productServices/productServices");

const productResolvers = {
    Query: {
        //get all product
        getAllProduct: async (parent, args, context, info) => {
            console.log({ parent, args, context, info })
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
        createAProduct: async (_parent, { createProductInput }) => {
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
        },

        // update a product
        updateAProduct: async (_parent, { updateAProductInput }) => {
            try {
                const result = await updateAProduct(updateAProductInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // delete a product
        deleteAProduct: async (_parent, { deleteAProductInput }) => {
            try {
                const result = await deleteAProduct(deleteAProductInput);
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

module.exports = productResolvers;