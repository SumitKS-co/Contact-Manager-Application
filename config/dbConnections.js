const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Mongodb chal gaya:",
            connect.connection.host,
            connect.connection.name   // Gives the name of the database
        );
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports = connectDb;