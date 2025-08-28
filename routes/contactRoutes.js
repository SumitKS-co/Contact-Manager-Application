const express = require("express");

const router = express.Router();
const {getContact,createContact,getContactid,updateContact,deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

//==================================================================

router.use(validateToken);   // this way we made all routes protected , This is a middleware

router.get("/",getContact);

router.post("/",createContact);

router.get("/:id",getContactid)

router.put("/:id",updateContact)

router.delete("/:id",deleteContact)

module.exports = router;