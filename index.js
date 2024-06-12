const express = require("express");
const { ApoloServer } = require("@apollo/server");
const { expressMiddleware } = require("body-parser");
const cors = require("cors");

async function startServer(){
    const app= express();
    const server = new ApoloServer({
        typeDefs:`
        type Todo{
            id:ID!
            tittle:string!
            completed: Boolean
        }
            
        type Query{
            getTodos:[Todo]
        }
        `,
        resolvers: {},
    });

    app.use(bodyParer.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, ()=>{
        console.log('Server Started at PORT 8000');
    })
}

startServer();