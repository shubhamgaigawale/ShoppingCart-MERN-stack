const express = require('express');
const router = express.Router();
const { signout, signup } = require("../controllers/auth");
const { check, validationResult } = require('express-validator');

router.get("/signout", [
    check("name").isLength({ min: 3 }).withMessage("name should be atleast 3 character"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 6 }).withMessage("Password should be atleast 6 character")
], signout);
router.post("/signup", signup)

module.exports = router;
