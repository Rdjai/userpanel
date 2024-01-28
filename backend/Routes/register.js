// routes/userRoutes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../Models/UserModel');

const router = express.Router();

// Route for user registration
router.post('/Register', [
  // Validation middleware using express-validator
  body('name').notEmpty().withMessage('Name is required'),
  body('mobileNumber').notEmpty().withMessage('Mobile Number is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
  body('areaPincode').notEmpty().withMessage('Area Pincode is required'),
], async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Check if the email is already registered
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new User({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: hashedPassword,
      areaPincode: req.body.areaPincode,
      referralPin: req.body.referralPin,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
