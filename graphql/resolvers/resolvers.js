const customerResolvers = require("./customerResolvers/customerResolvers");
const productResolvers = require("./productResolvers/productResolvers");
const sellerResolvers = require("./sellerResolvers/sellerResolvers");
const userResolvers = require("./userResolvers/userResolvers");

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...productResolvers.Query,
        ...customerResolvers.Query,
        ...sellerResolvers.Query
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...productResolvers.Mutation,
        ...customerResolvers.Mutation,
        ...sellerResolvers.Mutation
    }
}

module.exports = resolvers;