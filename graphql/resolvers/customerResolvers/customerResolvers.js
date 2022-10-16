const { UserInputError } = require("apollo-server-express");
const { createACustomer, getAllCustomer, updateACustomer, deleteACustomer } = require("../../../services/customerServices/customerServices");


const customerResolvers = {
    Query: {
        // get all customer
        getAllCustomer: async () => {
            try {
                const result = await getAllCustomer();
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
        // create a customer
        createACustomer: async (_parent, { createACustomerInput }, _context, _info) => {
            try {
                const result = await createACustomer(createACustomerInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // update a customer
        updateACustomer: async (_parent, { updateACustomerInput }) => {
            try {
                const result = await updateACustomer(updateACustomerInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // delete a customer
        deleteACustomer: async (_parent, { deleteACustomerInput }) => {
            try {
                const result = await deleteACustomer(deleteACustomerInput);
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

module.exports = customerResolvers;