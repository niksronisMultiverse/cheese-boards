const index = require('./../index')
const User = require('./../Models/User.model')
const Board = require('./../Models/Board.model')
const { sequelize, findAll } = require('./../Models/User.model')
const Cheese = require('../Models/Cheese.model')
const db = require('../db/db')

describe('Testing user model functionality', () => {

    beforeAll(async () => {
        await db.sync({force:true})
    })

    test('Checks user and board many to one association', async () => {
        
        const newUser =  await User.create({
            name: 'John Smith',
            email: 'johnsmith@gmail.com'
            })

        const board1 = await Board.create({
            type: 'French Board',
            description: 'A board consisting of various French cheeses',
            rating: 3
        })

        const board2 = await Board.create({
            type: 'Italian Board',
            description: 'A board consisting of various Italian cheeses',
            rating: 4
        })

        newUser.addBoards([board1,board2])
        
        const newUserBoards = await newUser.getBoards()
        expect(newUserBoards.length).toBe(2)
    })

})