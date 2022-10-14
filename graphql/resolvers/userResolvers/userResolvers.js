const { UserInputError } = require("apollo-server-express");
const { createUser, loginUser } = require("../../../services/userServices/userService");

const userResolvers = {
    Query: {

    },
    Mutation: {
        // register an user
        registerUser: async (_parent, { registerInput }, _context, _info) => {
            try {
                const result = await createUser(registerInput);
                if (result.success) {
                    return result.data;
                } else {
                    throw new UserInputError(result.message);
                }
            } catch (err) {
                throw new UserInputError(err.message);
            }
        },

        // login an user
        loginUser: async (_parent, { loginInput }, _context, _info) => {
            try {
                const result = await loginUser(loginInput);
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

module.exports = userResolvers;