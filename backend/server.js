// server.js

const express = require('express');
const session = require('express-session');
const app = express();
const port = 3001; // Choose your preferred port

// Middleware for parsing JSON data
app.use(express.json());

// Initialize session middleware
app.use(
  session({
    secret: 'your_secret_key', // Replace with a strong, secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Sample login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Implement your authentication logic here
  // Check if the provided username and password are valid
  // Set session data to indicate that the user is logged in

  if (username === 'admin' && password === 'password') {
    req.session.user = { username: 'admin' };
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

