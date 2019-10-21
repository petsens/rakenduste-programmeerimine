const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const userController = require("./user.controller.js");

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array() });
    }
    next();
};

// Login
router.post("/login",userController.login);

// Creates new user(signup)
router.post("/signup", [
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
  ],
  validationMiddleware,
  userController.signup
  );

module.exports = router;