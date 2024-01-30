// levelIncomeService.js
const User = require('../Models/UserModel');
const LevelIncome = require('../Models/levelmodel');

async function calculateAndStoreInitialLevelIncome(userId) {
  const user = await User.findById(userId);
  const childrenSize = user.children.length;

  let level = 1;
  let incomeIncrease = 0;

  if (childrenSize >= 4) {
    level = 2;
    incomeIncrease = 0.015;
  } else if (childrenSize >= 20000) {
    level = 3;
    incomeIncrease = 0.03;
  } else if (childrenSize >= 10000) {
    level = 4;
    incomeIncrease = 0.04;
  } else if (childrenSize >= 3000) {
    level = 5;
    incomeIncrease = 0.05;
  }

  const newIncome = user.amount + user.amount * incomeIncrease;

  // Create a new LevelIncome document and store it in the LevelIncome collection
  const levelIncome = new LevelIncome({
    userId: user._id,
    level: level,
    incomeIncrease: incomeIncrease,
    initialIncome: newIncome,
  });

  await levelIncome.save();

  return { level, newIncome };
}

module.exports = { calculateAndStoreInitialLevelIncome };
