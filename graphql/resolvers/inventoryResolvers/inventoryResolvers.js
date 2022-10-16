const { UserInputError } = require("apollo-server-express");
const { addProductToInventory, getAllInventoryProduct } = require("../../../services/inventoryServices/inventoryServices");

const inventoryResolvers = {
    Query: {
        // get all inventory products
        getAllInventoryProducts: async () => {
            try {
                const result = await getAllInventoryProduct();
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
        // add product to inventory
        addProductToInventory: async (_parent, { addProductToInventoryInput }) => {
            try {
                const result = await addProductToInventory(addProductToInventoryInput);
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

module.exports = inventoryResolvers;