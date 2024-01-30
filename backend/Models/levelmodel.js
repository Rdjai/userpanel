const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  level: {
    type: Number,
    required: true,
    default: 1, // Starting level
  },
  incomeIncrease: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('Level', LevelSchema);
