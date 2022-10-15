const { gql } = require("apollo-server-express");

const typeDefs = gql`

    #Timestamp type 
    scalar GraphQLDateTime

    #Common types
    input DeleteInput{
        id:ID!
    }
    type DeleteResult{
        success:Boolean!
        message:String
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
        photo:String
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
        purchasePrice:Int!
        details:String!
        status:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateProductInput{
        name:String!
        purchasePrice:Int!
        details:String!
    }
    input UpdateAProductInput{
        id:ID!
        name:String
        purchasePrice:Int
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
        product:ID!
        stock:Int!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    type InventoryWithProduct{
        id:ID!
        product:Product!
        stock:Int!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }

    input AddProductToInventoryInput{
        product:ID!
        stock:Int!
    }

    #Product sell types
    type SellProduct{
        id:ID!
        product:Product!
        quantity:Int!
        customer:Customer!
        sellPrice:Int!
        invoice:String!
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }

    input SellAProductInput{
        product:ID!
        quantity:Int!
        customer:ID!
        sellPrice:Int!
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
        getAllInventoryProducts:[InventoryWithProduct]

        #product sell queries
        getAllSellProduct:[SellProduct]
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
        addProductToInventory(addProductToInventoryInput:AddProductToInventoryInput):Inventory

        #Product sell mutations
        sellAProduct(sellAProductInput:SellAProductInput):SellProduct

    }


`;

module.exports = typeDefs;