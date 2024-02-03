// app.js or server.js

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

const userRoutes = require('./Routes/Allapis');
const incomeRoutes = require('./Routes/IncomeRout');
const getUserRoutes = require('./Routes/Getuser');
const Videolink = require('./Routes/Getvideolink');

// Mount the routes
app.use('/api/v1', userRoutes);
app.use('/api/v2', incomeRoutes);
app.use('/api/v3', getUserRoutes);
app.use('/api/v4', Videolink);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
