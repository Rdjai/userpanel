const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  areaPincode: {
    type: String,
    required: true,
  },
  referralPin: {
    type: String,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the parent user
  },
  left: {
    type: Boolean, // Indicate if the user is a left or right child
    default: false,
  },
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Array to store child user IDs
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
