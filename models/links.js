const Sequelize = require('sequelize');
const database = require('../db');


const Link = 
    database.define('link', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        short: {
            type: Sequelize.STRING,
            allowNull: false
        },
        hits: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
module.exports = Link;

