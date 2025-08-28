const asyncHandler = require("express-async-handler");  // to handle the express async error
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register the user 
// @route POST/api/user/register
// @access public
const registerUser = asyncHandler ( async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields mandatory");
    }

    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    
    // Hash Passowrd
    const hashedPass = await bcrypt.hash(password,10);
    console.log("Hashed Password : " + hashedPass);

    const user = await User.create({
        username,
        email,
        password:hashedPass
    })

    console.log(user);

    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }

    res.json({message:"Register the user"});
})

// @desc Login the user 
// @route POST/api/user/login
// @access public
const loginUser = asyncHandler ( async (req,res)=>{
    const {email,password} = req.body;
    
    if(!email || !password){
        res.status(400);
        throw new Error("All field mandatory");
    }

    const user = await User.findOne({email});
    // compare password with hashedPassword
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
                user:{
                    username:user.username,
                    email : user.email,
                    id : user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn : "15m"}
        )
        res.status(200).json({ accessToken });
    }
    else{
        res.status(401);
        throw new Error("email or password is not valid");
    }
})


// @desc Current user 
// @route GET/api/user/current
// @access private
const currentUser = asyncHandler ( async (req,res)=>{
    res.json(req.user);
})

module.exports = {registerUser,loginUser,currentUser};