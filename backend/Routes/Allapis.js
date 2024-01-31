const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken'); // Import the jwt module
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../Models/UserModel');
const updateLevelIncome = require('./IncomeRout');
const levelIncomeService = require('../Utils/levelincome');

const router = express.Router();

// Registration route
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('mobileNumber').notEmpty().withMessage('Mobile Number is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').notEmpty().withMessage('Password is required'),
  body('areaPincode').notEmpty().withMessage('Area Pincode is required'),
  body('referralPin').optional(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      ...req.body,
    });

    let parentUser = null;

    if (req.body.referralPin) {
      parentUser = await User.findOne({ referralPin: req.body.referralPin });

      if (!parentUser) {
        return res.status(400).json({ message: 'Invalid referral pin' });
      }

      const isLeftChild = parentUser.children.length === 0 || parentUser.children[0]?.left;

      newUser.parentId = parentUser._id;
      newUser.left = isLeftChild;
    }

    await newUser.save();

    // Calculate and store initial level income during registration
    const initialLevelIncome = await levelIncomeService.calculateAndStoreInitialLevelIncome(newUser._id);

    const referralPin = generateReferralPin(newUser.name, newUser.mobileNumber);
    await User.findByIdAndUpdate(newUser._id, { referralPin });

    if (newUser.parentId) {
      parentUser.children.push(newUser._id);
      await parentUser.save();
    }

    res.status(201).json({ message: 'User registered successfully', referralPin, initialLevelIncome });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Function to generate referral pin
function generateReferralPin(name, mobileNumber) {
  const namePrefix = name.substring(0, 3).toUpperCase();
  const mobileSuffix = mobileNumber.substring(0, 5);
  return `${namePrefix}${mobileSuffix}`;
}

// Route for user login (using mobile number)
router.post('/login', [
  body('mobileNumber').notEmpty().withMessage('Mobile Number is required'),
  body('password').notEmpty().withMessage('Password is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if the user with the provided mobile number exists
    const user = await User.findOne({ mobileNumber: req.body.mobileNumber });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password directly (without hashing)
    if (req.body.password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    // Return the token as part of the response
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error for login' });
  }
});

module.exports = router;