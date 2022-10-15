const customerResolvers = require("./customerResolvers/customerResolvers");
const inventoryResolvers = require("./inventoryResolvers/inventoryResolvers");
const productResolvers = require("./productResolvers/productResolvers");
const productSellResolvers = require("./productSellResolvers/productSellResolvers");
const sellerResolvers = require("./sellerResolvers/sellerResolvers");
const userResolvers = require("./userResolvers/userResolvers");

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...productResolvers.Query,
        ...customerResolvers.Query,
        ...sellerResolvers.Query,
        ...inventoryResolvers.Query,
        ...productSellResolvers.Query
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...productResolvers.Mutation,
        ...customerResolvers.Mutation,
        ...sellerResolvers.Mutation,
        ...inventoryResolvers.Mutation,
        ...productSellResolvers.Mutation
    }
}

module.exports = resolvers;