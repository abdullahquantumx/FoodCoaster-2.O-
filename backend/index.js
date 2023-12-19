// Import required modules
const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db.js');

// Connect to MongoDB
connectToMongo();

// Create an instance of the Express application
const app = express();

// Set the port for the server
const port = 5000;

// Middleware to handle Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes for authentication
app.use('/api/auth', require('./routes/auth.js'));

// Routes for orders
app.use('/api/orders',require('./routes/orders.js'))
// Start the server and listen on the specified port

app.use('/api/contact',require("./routes/contact.js"))

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
