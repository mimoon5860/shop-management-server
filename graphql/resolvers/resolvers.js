const customerResolvers = require("./customerResolvers/customerResolvers");
const inventoryResolvers = require("./inventoryResolvers/inventoryResolvers");
const productResolvers = require("./productResolvers/productResolvers");
const sellerResolvers = require("./sellerResolvers/sellerResolvers");
const sellProductResolvers = require("./sellProductResolvers/sellProductResolvers");
const userResolvers = require("./userResolvers/userResolvers");

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...productResolvers.Query,
        ...customerResolvers.Query,
        ...sellerResolvers.Query,
        ...inventoryResolvers.Query,
        ...sellProductResolvers.Query
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...productResolvers.Mutation,
        ...customerResolvers.Mutation,
        ...sellerResolvers.Mutation,
        ...inventoryResolvers.Mutation,
        ...sellProductResolvers.Mutation
    }
}

module.exports = resolvers;