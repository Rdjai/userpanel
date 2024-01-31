// models/incomeModel.js
const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  adViewIncome: {
    type: Number,
    default: 0,
  },
  rewardIncome: {
    type: Number,
    default: 0,
  },
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;
