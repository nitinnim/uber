const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const userController = require("../controllers/user.controller");

// User registration route with validation
router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First name must be at least 2 characters long"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  userController.loginUser
);

module.exports = router;
