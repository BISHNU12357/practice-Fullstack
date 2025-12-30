import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const status = await mongoose.connect( process.env.MONGO_URI );
        if ( status )
            console.log( "Database is connected!" )
    } catch ( error ) {
        console.log( "Error in DB connection" )
    }
}
