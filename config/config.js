require('dotenv').config();

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
//   JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || 5000,
};

module.exports = config;