const index = require('./../index')
const User = require('./../Models/User.model')
const Board = require('./../Models/Board.model')
const { sequelize } = require('./../Models/User.model')



describe('Testing user model functionality', () => {

    beforeAll(async () => {
        await User.sync({force:true})

        const newUser =  await User.create({
            name: 'John Smith',
            email: 'johnsmith@gmail.com'
            })
        
    })

    test('Creates a new user', async () => {
        await User.create({
            name: 'John Smith',
            email: 'johnsmith@gmail.com'
        })
        
        const emailVar = await User.findAll({where: {
            name: 'John Smith'
        }})
        expect(emailVar[0].email).toBe('johnsmith@gmail.com')
    })

})