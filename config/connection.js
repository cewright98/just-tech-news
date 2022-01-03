// import Sequelize constructor from library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in MySQL info
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/tmp/mysql.sock',
    }
});

module.exports = sequelize;