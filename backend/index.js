require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// Connect to the database before starting the server
connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hii');
});

const authRoutes = require('./Routes/Allapis');
const incomeRoutes = require('./Routes/IncomeRout');

// Mount the auth routes under '/auth'
app.use('/users', authRoutes);

// Mount the income routes under '/income'
app.use('/income', incomeRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
