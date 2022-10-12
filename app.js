const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const UserModel = require('./models/userModel');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
    type User{
        id: ID
        name: String
        phone: String
        email:String
    }
    type Query{
        hello:String
        nani:String
        user:[User]
    }

    type Mutation{
        createUser(name:String, phone:String, email:String, password:String): User 
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello world",
        nani: () => "nani",
        user: async () => {
            return await UserModel.find().select({ name: 1, _id: 1, phone: 1, email: 1 });
        }
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            console.log({ parent, args, context, info });
            try {

                const user = new UserModel(args);
                user.save();
                return user
            } catch (err) {
                console.log(err)
            }
        }
    }
}



const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    })

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.use((_req, res) => {
        res.send("Hey bro server is running...");
    });

    app.use(cors());
    app.use(express.json());

    // database connection
    try {

        mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`Database connected.`);
    } catch (err) {
        console.log(err)
    }

    app.listen(PORT, () => {
        console.log("App is running at port " + PORT)
    })

}
startServer();