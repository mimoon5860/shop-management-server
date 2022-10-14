const { createACustomer, getAllCustomer } = require("../../../services/customerServices/customerServices");


const customerResolvers = {
    Query: {
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
    }
}

module.exports = customerResolvers;