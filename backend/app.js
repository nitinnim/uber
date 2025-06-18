require('dotenv').config();
const cors = require('cors'); // Import cors
const express = require('express');

const app = express();

// Enable CORS
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

module.exports = app;
