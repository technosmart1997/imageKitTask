const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authController = require("../controllers/auth");


router.post("/signup",[
  check('email').isEmail(),
  check('password').isLength({ min: 5 })
] ,authController.postSignup);


module.exports = router;
