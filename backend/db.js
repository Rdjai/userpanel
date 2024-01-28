require('dotenv').config();
const mongoose = require('mongoose');

// Replace the connection string with your MongoDB URI
const mongoURI = process.env.MONGOPORT ||5000;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Your additional code for fetching data, if needed, goes here

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;
