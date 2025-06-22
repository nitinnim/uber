const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
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

  status: {
    type: String,
    enum: ["active", "inactive", "busy"], // Example statuses
    default: "inactive",
  },

  vehicle: {
    color: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "colour must be atleast of 3 characters long"]
    },
    plate: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "Number plate must be atleast of 3 numbers"]
    },
    capacity: {
        type: Number,
        required: true,
        min: [1, "Capacity must be at least 1 person"],
    },
    vehicleType: {
        type: String,
        required: true,
        enum: ["car", "motorcycle", "auto"], // Example vehicle types
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    }
  }
});


captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: "24h" } // Token expiration time
  );
  return token;
};

captainSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// These are static methods — they operate on the model itself, not an individual document.
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;