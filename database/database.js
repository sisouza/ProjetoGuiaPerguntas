const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','youruserhere','yourpasshere',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;