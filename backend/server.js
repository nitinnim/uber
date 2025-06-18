const http = require('http');
const app = require('./app'); // Import the app object

const PORT = process.env.PORT || 3000;

// Create and start the HTTP server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});