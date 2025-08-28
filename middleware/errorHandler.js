// This is the error handler part

const errorHandler = (error,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({"message": error.message});
}

module.exports = errorHandler;