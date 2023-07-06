const express = require('express');
const app = express();
import user from '../models/user';

// Middleware to validate required fields
const validateFields = (req, res, next) => {
  const { firstname, lastname, email, password, password2, token } = req.body;
  
  // Check if any of the fields are missing
  if (!firstname || !lastname || !email || !password || !password2 || !token) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // If all fields are present, proceed to the next middleware or route handler
  next();
};

// Middleware to validate password match
const validatePasswordMatch = (req, res, next) => {
  const { password, password2 } = req.body;
  
  // Check if the passwords match
  if (password !== password2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  
  // If passwords match, proceed to the next middleware or route handler
  next();
};

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const { token } = req.body;
  
  // Check if the token is valid (implement your logic here)
  if (token !== 'your-registration-token') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  // If token is valid, proceed to the next middleware or route handler
  next();
};

// Signup endpoint
app.post('/api/signup', validateFields, validatePasswordMatch, authenticateToken, (req, res) => {
  // Handle user registration logic here
  
  // Return success message
  res.json({ success: true, message: 'User successfully registered!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
