const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');

async function updateLevelIncome(userId) {
  const user = await User.findById(userId);
  const childrenSize = user.children.length;
  let incomeIncrease = 0;
  let level= 1;

  if (childrenSize >= 4) {
      level=2;
    incomeIncrease = 0.015;
  } else if (childrenSize >= 20000) {
    level=3;
    incomeIncrease = 0.03;
  } else if (childrenSize >= 10000) {
    level=4;
    incomeIncrease = 0.04;
  } else if (childrenSize >= 3000) {
    level=5;
    incomeIncrease = 0.05;
  }

  const newIncome = user.amount + (user.amount * incomeIncrease);
  await User.findByIdAndUpdate(userId, { income: newIncome });
}


