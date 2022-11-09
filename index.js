const User = require('./Models/User.model')
const Board = require('./Models/Board.model')
const Cheese = require('./Models/Cheese.model')


User.hasMany(Board)
Board.belongsTo(User)

Cheese.belongsToMany(Board, {through : 'Cheese_Board'})
Board.belongsToMany(Cheese, {through : 'Cheese_Board'})


module.exports = { Board,Cheese,User }