// Import necessary modules and services
const express = require('express');
const axios = require('axios');
const router = express.Router();
const User = require('../Models/UserModel');
const Income = require('../Models/IncomeModel');

// Increment ad view income by 50 rupees
router.post('/adView', async (req, res) => {
  const { userId } = req.body;

  try {
    // Find or create the Income record for the user
    const income = await Income.findOne({ userId });
    if (!income) {
      const newIncome = new Income({ userId });
      await newIncome.save();
    }

    await Income.findOneAndUpdate({ userId }, { $inc: { adViewIncome: 50 } });

    res.json({ message: 'Ad view counted successfully' });
  } catch (error) {
    console.error('Error counting ad view:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get ad view income for a user
router.get('/adview/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the Income record for the user
    const income = await Income.findOne({ userId });

    if (!income) {
      return res.status(404).json({ message: 'Income record not found for the user' });
    }

    res.json({ adViewIncome: income.adViewIncome });
  } catch (error) {
    console.error('Error fetching ad view income:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
