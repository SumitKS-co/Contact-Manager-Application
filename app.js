const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnections");
const app = express();
const dotenv = require("dotenv").config(); // this module is for .env file , which will be used to get the data from it 
// npm i dotenv ✅
// npm i env ❌

connectDb();  // This is the database
const port = process.env.PORT;

app.use(express.json());

app.use("/api/contact",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.get("/",(req,res)=>{
    res.redirect("/api/contact");
})

app.use(errorHandler); // for handling error

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})
