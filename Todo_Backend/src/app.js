import express from "express"
import todoRouter from "./routes/todo.routes.js"
import cors from "cors"

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.get( "/", ( req, res ) => {
    res.json( {
        message: "This is get route",
    } )
} )
app.use( "/api/v1/todo", todoRouter )

export default app;