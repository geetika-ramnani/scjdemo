const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,         // Database name
  process.env.DB_USER,         // Username
  process.env.DB_PASS,         // Password
  {
    host: process.env.DB_HOST, // Hostname
    port: process.env.DB_PORT, // Port (default 3306)
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize; 