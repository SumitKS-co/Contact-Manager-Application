const asyncHandler = require("express-async-handler");  // to handle the express async error
const Contact = require("../models/contactModel");

// Hum is folder m "contactRoutes" wale jo req,res the
// unhe likhte hai


// @desc Get all Contact <---------------- Bus samjha rahe h
// @route GET/api/contact
// @access private
const getContact = asyncHandler (async (req,res)=>{
    const contact = await Contact.find({user_id : req.user.id});
    res.status(200).json(contact);
})

// @desc Create New Contact 
// @route POST/api/contact
// @access private
const createContact = asyncHandler( async (req,res)=>{
    console.log(req.body);
    const {name,email,phone} = req.body;
    
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id : req.user.id
    });

    res.status(201).json(contact);
})

// @desc Get Contact 
// @route GET/api/contact/:id
// @access private
const getContactid = asyncHandler (async (req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact)
})

// @desc Update Contact 
// @route PUT/api/contact/:id
// @access private
const updateContact = asyncHandler (async (req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have permission to update other user");
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )

    res.status(200).json(updateContact);
})


// @desc Delete Contact 
// @route DELETE/api/contact/:id
// @access private
const deleteContact = asyncHandler( async (req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have permission to delete other user");
    }

    await contact.deleteOne();
    res.status(200).json(contact);
})


module.exports = {getContact,createContact,getContactid,updateContact,deleteContact};