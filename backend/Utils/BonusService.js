const User = require('../Models/UserModel');

const levelIncomePercentages = {
  3000: 0.05,
  10000: 0.04,
  20000: 0.03,
  40000: 0.02,
  80000: 0.0125,
};

const rewardIncomePerID = 51000;
const adViewIncomePerDay = 50;

class BonusService {
  async calculateLevelIncome(user) {
    let currentUser = user;
    let totalTeamSize = 0;
    let levelIncome = 0;

    while (currentUser && !levelIncome) {
      totalTeamSize += (currentUser.left ? 1 : 0) + (currentUser.right ? 1 : 0);

      Object.keys(levelIncomePercentages).some((levelSize) => {
        if (totalTeamSize >= levelSize && currentUser.upgraded) {
          levelIncome = levelIncomePercentages[levelSize] * user.teamJoiningFees; // Assuming joining fees are stored in the user model
          return true; // Break out of the some loop
        }
        return false;
      });

      currentUser = await User.findById(currentUser.parentId);
    }

    return levelIncome;
  }

  calculateRewardIncome(user) {
    return user.directIds * rewardIncomePerID; // Assuming directIds are stored in the user model
  }

  calculateAdViewIncome(user) {
    // Implement your logic for ad view income calculation here
    return adViewIncomePerDay; // Assuming fixed income for now
  }

  async calculateTotalIncome(user) {
    const levelIncome = await this.calculateLevelIncome(user);
    const rewardIncome = this.calculateRewardIncome(user);
    const adViewIncome = this.calculateAdViewIncome(user);

    // Replace the following line with your logic for direct team income calculation
    const directTeamIncome = /* Implement logic for direct team income calculation */ 0;

    return {
      totalIncome: levelIncome + rewardIncome + adViewIncome + directTeamIncome,
    };
  }

  async calculateAndPayBonuses(newUser, parentUser) {
    // Calculate level income for the parent
    const parentLevelIncome = await this.calculateLevelIncome(parentUser);

    // Update the parent's income and trigger payment if necessary
    if (parentLevelIncome > parentUser.income.levelIncome) {
      const update = {
        income: {
          levelIncome: parentLevelIncome,
        },
      };
      await User.findByIdAndUpdate(parentUser._id, update);
      // Trigger payment logic for the parent's level income increase
    }

    // Reward both users
    const newUserReward = rewardIncomePerID;
    const parentUserReward = rewardIncomePerID * 0.2; // Example: the parent gets 20% of the new user's reward

    await User.findByIdAndUpdate(newUser._id, { $inc: { 'income.rewardIncome': newUserReward } });
    await User.findByIdAndUpdate(parentUser._id, { $inc: { 'income.rewardIncome': parentUserReward } });

    // Implement any additional bonus calculations or payments based on your MLM structure
  }
}

module.exports = BonusService;
