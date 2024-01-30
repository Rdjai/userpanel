require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000; // Use port from .env or default to 3001
const connectToDatabase = require('./db');

// Connect to the database before starting the server
connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hii');
});
const authRoutes = require('./Routes/Allapis');
const incomeroute = require('./Routes/IncomeRout');
app.use('/users', authRoutes);
app.use('/users', incomeroute);
// app.use('/users', authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
