const express = require('express');
const session = require('express-session');
const cors = require('cors'); // Import the cors module
const app = express();
const port = 3001;

// Middleware for parsing JSON data
app.use(express.json());

// Initialize session middleware
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

// Enable CORS for all routes (adjust origin to your React app's URL)
app.use(cors({ origin: 'http://localhost:3000' }));

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
