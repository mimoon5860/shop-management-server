const { gql } = require("apollo-server-express");

const typeDefs = gql`

    scalar GraphQLDateTime
    #User types
    type User{
        id: ID!
        name: String!
        phone: String!
        email:String!
        photo:String
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }

    input LoginInput{
        email:String!
        password:String!
    }

    input RegisterUserInput{
        name:String!
        phone:String!
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
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateProductInput{
        name:String!
        purchasePrice:Int!
        details:String!
    }

    #Customer All types
    type Customer{
        id:ID!
        name:String!
        phone:String!
        photo:String
        address:String
        email:String
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateACustomerInput{
        name:String!
        phone:String!
        photo:String
        address:String
        email:String
    }

    #Seller All Types
    type Seller{
        id:ID!
        name:String!
        phone:String!
        photo:String
        address:String
        email:String
        createdAt:GraphQLDateTime!
        updatedAt:GraphQLDateTime!
    }
    input CreateASellerInput{
        name:String!
        phone:String!
        photo:String
        address:String
        email:String
    }


    #All Queries
    type Query{
        #user queries
        getAUser: User

        #product queries
        getAllProduct:[Product]

        # customer queries
        getAllCustomer:[Customer]

        # seller queries
        getAllSeller:[Seller]
    }

    #All Mutations
    type Mutation{
        #User mutations
        registerUser(registerInput: RegisterUserInput): User
        loginUser(loginInput:LoginInput): User

        #Product mutations
        createAProduct(createProductInput:CreateProductInput):Product

        #Customer mutations
        createACustomer(createACustomerInput:CreateACustomerInput):Customer

        #Seller mutations
        createASeller(createASellerInput:CreateASellerInput):Seller

        #Product sell mutations

    }


`;

module.exports = typeDefs;