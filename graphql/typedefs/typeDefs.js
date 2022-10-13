const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        phone: String!
        email:String!
        photo:String
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
    type Query{
        getAUser: User
    }
    type Mutation{
        registerUser(registerInput: RegisterUserInput): User
        loginUser(loginInput:LoginInput): User
    }
`;

module.exports = typeDefs;