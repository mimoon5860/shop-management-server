const { gql } = require("apollo-server-express");

const typeDefs = gql`

    #Timestamp type 
    scalar GraphQLDateTime
    scalar Date

    #Common types
    input DeleteInput{
        id:ID!
    }
    type DeleteResult{
        success:Boolean!
        message:String
    }
    type CreateResult{
        success:Boolean!
        message:String!
        id:ID
    }

    #User types
    type User{
        id: ID!
        name: String!
        phone: String!
        email:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }

    input LoginInput{
        email:String!
        password:String!
    }

    input RegisterUserInput{
        name:String!
        email:String!
        phone:String!
        password:String!
    }
    input LoginUserInput{
        email:String!
        password:String!
    }

    #All Product types
    type Product{
        id:ID!
        name:String!
        details:String!
        sellCount:Int
        status:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateProductInput{
        name:String!
        details:String!
    }
    input UpdateAProductInput{
        id:ID!
        name:String
        details:String
        status:String
    }

    #Customer All types
    type Customer{
        id:ID!
        name:String!
        phone:String!
        address:String
        email:String
        status:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateACustomerInput{
        name:String!
        phone:String!
        address:String
        email:String
    }
    input UpdateACustomerInput{
        id:ID!
        name:String
        phone:String
        address:String
        email:String
        status:String
    }

    #Seller All Types
    type Seller{
        id:ID!
        name:String!
        phone:String!
        address:String
        email:String
        status:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateASellerInput{
        name:String!
        phone:String!
        address:String
        email:String
    }
    input UpdateASellerInput{
        id:ID!
        name:String
        phone:String
        address:String
        email:String
        status:String
    }

    # Inventory all types 
    type Inventory{
        id:ID!
        product:Product!
        purchasePrice:Int!
        buyStock:Int!
        stock:Int!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }

    input AddProductToInventoryInput{
        product:ID!
        purchasePrice:Int!
        stock:Int!
    }

    #Product sell types
    input SellProductSingleProductInput{
        id:ID!
        name:String!
        quantity:Int!
        sellPrice:Int!
    }
    input SellProductCustomerInput{
        id:ID!
        name:String!
        address:String!
        phone:String!
    }
    input SellProductByDate{
        from:Date!
        to:Date!
    }
    input SellProductByProductOrCustomer{
        name:String!
    }
    type SellProductSingleProduct{
        id:ID!
        name:String!
        quantity:Int!
        sellPrice:Int!
    }
    type SellProductCustomer{
        id:ID!
        name:String!
        address:String!
        phone:String!
    }
    
    type SellProduct{
        id:ID!
        product:[SellProductSingleProduct]
        customer:SellProductCustomer!
        invoice:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input SellProductInput{
        product:[SellProductSingleProductInput]!
        customer:SellProductCustomerInput!
    }

    #dashboard data
    type Total{
        total:Int
        amount:Int
    }
    type DashboardSummery{
        totalSell:Total
        totalBuy:Total
        profit:Int
        bestSellingProduct:Product
    }

    #All Queries
    type Query{
        #user queries
        getAUser: User

        #product queries
        getAllProduct:[Product]

        #customer queries
        getAllCustomer:[Customer]

        #seller queries
        getAllSeller:[Seller]

        #inventory queries
        getAllInventoryProducts:[Inventory]

        #product sell queries
        getAllSellProduct:[SellProduct]
        getAllSellProductByDate(sellProductByDate:SellProductByDate):[SellProduct]
        getAllSellProductByProductName(sellProductByProductName:SellProductByProductOrCustomer):[SellProduct]
        getAllSellProductByCustomerName(sellProductByCustomerName:SellProductByProductOrCustomer):[SellProduct]

        #dashboard summery
        getDashboardSummery:DeleteResult
    }

    #All Mutations
    type Mutation{
        #User mutations
        registerUser(registerInput: RegisterUserInput): User
        loginUser(loginInput:LoginInput): User

        #Product mutations
        createAProduct(createProductInput:CreateProductInput):Product
        updateAProduct(updateAProductInput:UpdateAProductInput):Product
        deleteAProduct(deleteAProductInput:DeleteInput):DeleteResult

        #Customer mutations
        createACustomer(createACustomerInput:CreateACustomerInput):Customer
        updateACustomer(updateACustomerInput:UpdateACustomerInput):Customer
        deleteACustomer(deleteACustomerInput:DeleteInput):DeleteResult

        #Seller mutations
        createASeller(createASellerInput:CreateASellerInput):Seller
        updateASeller(updateASellerInput:UpdateASellerInput):Seller
        deleteASeller(deleteASellerInput:DeleteInput):DeleteResult

        # Inventory mutations
        addProductToInventory(addProductToInventoryInput:AddProductToInventoryInput):CreateResult

        #Product sell mutations
        sellProduct(sellProductInput:SellProductInput):CreateResult

    }
`;

module.exports = typeDefs;