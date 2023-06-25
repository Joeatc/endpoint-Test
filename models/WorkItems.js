// models/WorkItems.js
const {DataTypes} = require('sequelize');
const sequelize = require('../db');  // import your Sequelize instance

const WorkItems = sequelize.define('WorkItems', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    breakDuration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    projectNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subprojectNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    activity: {
        type: DataTypes.STRING(2000),
        allowNull: false
    },
    reviewRequired: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    indexes: [
        {
            fields: ['projectNumber']
        }
    ]
});

module.exports = WorkItems;
