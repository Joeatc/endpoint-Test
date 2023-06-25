// db.js
const { Sequelize } = require('sequelize');

// create a Sequelize instance with your database connection information
const sequelize = new Sequelize('Zeiterfassung', 'sa', 'Sql12345', {
    host: 'localhost',
    dialect: 'mssql'  // use 'mssql' for SQL Server
});

module.exports = sequelize;
