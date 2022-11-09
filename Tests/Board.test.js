const Board = require('../Models/Board.model')
const db = require('../db/db')


describe('Testing board model functionality', () => {

    beforeAll(async () => {
       await db.sync({force:true})
    })

    test('Creates a new Board', async () => {
        await Board.create({
            type: 'Oak Board',
            description: '20cm squared oak board',
            rating: 95
        })

        const boardVar = await Board.findAll({where: {
            type: 'Oak Board'
        }})
        expect(boardVar[0].rating).toBe(95)
    })

})