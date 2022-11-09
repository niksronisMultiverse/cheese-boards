const {sequelize, Sequelize} = require('sequelize')
const path = require('path')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname,'CheeseBoard.sqlite'),
    logging: false
})

module.exports = db