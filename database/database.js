const Sequelize = require('sequelize');

const connection = new Sequelize('dbname','youruserhere','yourpasshere',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;