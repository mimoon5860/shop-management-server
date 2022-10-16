const express = require('express');
const cors = require('cors');
const path = require('path');
const typeDefs = require('./graphql/typedefs/typeDefs');
const resolvers = require('./graphql/resolvers/resolvers');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, resolvers, context: ({ req }) => {
            return req;
        }
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    // send file
    app.get('/invoice/:filename', (req, res) => {
        const { filename } = req.params;
        res.sendFile(path.resolve(`${__dirname}/invoices/${filename}`));
    })

    // default response for server start
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

    // server start
    app.listen(PORT, () => {
        console.log("App is running at port " + PORT)
    })

}
startServer();