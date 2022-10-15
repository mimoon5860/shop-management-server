const { UserInputError } = require("apollo-server-express");
const { addProductToInventory, getAllInventoryProduct } = require("../../../services/inventoryServices/inventoryServices");

const inventoryResolvers = {
    Query: {
        // get all inventory products
        getAllInventoryProducts: async () => {
            try {
                const result = await getAllInventoryProduct();
                console.log(result.product);
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
            console.log({ addProductToInventoryInput })
            try {
                const result = await addProductToInventory(addProductToInventoryInput);
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

module.exports = inventoryResolvers;