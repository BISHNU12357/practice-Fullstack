import app from "./app.js"
import dotenv from "dotenv"
import { connectDb } from "./utils/db.js"

dotenv.config( {
    path: "./.env",
} )



connectDb()
    .then( () => {
        app.listen( process.env.PORT, () => console.log( `The backend is listening on ${ process.env.PORT }` ) )
    } )
    .catch( ( err ) => {
        console.log( "mongodb is not connected" );
        process.exit( 1 );
    } )