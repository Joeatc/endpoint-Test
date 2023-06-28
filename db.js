// db.js
const { Sequelize } = require('sequelize');

// create a Sequelize instance with your database connection information
const sequelize = new Sequelize('Zeiterfassung', 'sa', 'Sql12345', {
    host: 'host.docker.internal',
    dialect: 'mssql',  // use 'mssql' for SQL Server
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
            // If needed, provide the certificate file
            // ca: fs.readFileSync(__dirname + '/msnodesqlv8.crt')
        }
    }
});

module.exports = sequelize;
