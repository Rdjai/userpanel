// authMiddleware.js


const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};


//user logic
const user = async (req, res) => {
  try {
    // const userData = req.user;
    // console.log(userData);
    res.status(200).json({ msg: "hey user" })
  } catch (err) {
    console.log(`error from the user route ${err}`);
  }
}

module.exports = authenticateUser;
