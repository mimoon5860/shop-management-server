const { UserInputError } = require("apollo-server-express");
const { getDashboardSummery } = require("../../../services/dashboardServices/dashboardServices");

const dashboardResolvers = {
    Query: {
        //get dashboard summery
        getDashboardSummery: async () => {
            try {
                const result = await getDashboardSummery();
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


    }
}

module.exports = dashboardResolvers;