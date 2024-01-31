// Import necessary modules and services
const express = require('express');
const axios = require('axios');
const router = express.Router();
const User = require('../Models/UserModel');
const Income = require('../Models/IncomeModel');



router.post('/ad-view', async (req, res) => {
  const { userId } = req.body;

  try {
    // Find or create the Income record for the user
    const income = await Income.findOne({ userId });
    if (!income) {
      const newIncome = new Income({ userId });
      await newIncome.save();
    }

    // Increment ad view income by 50 rupees
    await Income.findOneAndUpdate({ userId }, { $inc: { adViewIncome: 50 } });

    res.json({ message: 'Ad view counted successfully' });
  } catch (error) {
    console.error('Error counting ad view:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;