const Cheese = require('../Models/Cheese.model')
const db = require('../db/db')

describe('Testing cheese model functionality', () => {

     beforeAll(async () => {
        await db.sync({force:true})
     })

    test('Creates a new Cheese', async () => {
        await Cheese.create({
            title: 'Newcastle Cheddar',
            description: 'A sharp cheddar from the Newcastle area'
        })

        const cheeseVar = await Cheese.findAll({where: {
            title: 'Newcastle Cheddar'
        }})
        expect(cheeseVar[0].description).toBe('A sharp cheddar from the Newcastle area')
    })

})