const express = require('express');
const router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require('express-validator');

router.post("/signup", [
    check('name').isLength({ min: 3 }).withMessage('name should be atleast 3 character'),
    check('email').isEmail().withMessage('Email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password should be atleast 6 character')
], signup)

router.post("/signin", [
    check('email').isEmail().withMessage('Email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password field is required')
], signin)

router.get("/signout", signout);

router.get("/test", isSignedIn, (req, res) => {
    res.json(req.auth)
})


module.exports = router;
