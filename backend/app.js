require('dotenv').config();
const cors = require('cors'); // Import cors
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser'); // Import cookie-parser
const dbConnect = require('./db/db'); // Import the database connection
const userRoutes = require('./routes/user.route'); // Import user routes
const captainRoutes = require('./routes/captain.route'); // Import captain routes

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware to parse cookies

dbConnect(); // Connect to the database

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
