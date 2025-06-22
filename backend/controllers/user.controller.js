const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  // Check if user already exists
  const isUserExists = await userModel.findOne({ email: email });
  if (isUserExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({
    token,
    user,
  });
};

module.exports.loginUser = async (req, res, next) => {
  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  // Find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token); // Set the token in a cookie (optional, if you want to use cookies)

  res.status(200).json({
    token,
    user,
  });
};

module.exports.getUserProfile = async (req, res, next) => {
  // The user is already attached to the request object by the auth middleware
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  // Optionally, you can also blacklist the token if you have a blacklist mechanism
  await blacklistTokenModel.create({ token });

  // Clear the token cookie
  res.clearCookie("token");

  res.status(200).json({ message: "Logged out successfully" });
};
