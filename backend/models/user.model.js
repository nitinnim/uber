const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "First name must be at least 2 characters long"],
      trim: true,
    },
    lastname: {
      type: String,
      minlength: [2, "Last name must be at least 2 characters long"],
      trim: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Pssword must be at least 5 characters long"],
    select: false, // Do not return password in queries
  },
  socketId: {
    // for live tracking the location of the user or driver
    type: String,
  },
});

// These are instance methods — they operate on a single document (i.e., an instance of the model).
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: "24h" } // Token expiration time
  );
  return token;
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// These are static methods — they operate on the model itself, not an individual document.
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
