const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');
const Income = require('../Models/IncomeModel');
const Level = require('../Models/levelmodel');

// Fetch all details for a user using their unique ID
router.get('/userdetails/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the income record for the user
    const income = await Income.findOne({ userId });
    // if (!income) {
    //   return res.status(404).json({ message: 'Income record not found for the user' });
    // }

    // Find the levels for the user
    const levels = await Level.find({ userId });

    // Combine user, income, and levels data
    const userDetails = {
      user,
      income,
      levels,
    };

    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
