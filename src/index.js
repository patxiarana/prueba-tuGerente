import app from './app.js'
import {sequelize} from './database/database.js'

import './models/Booking.js'

async function main(){
    try{
    await sequelize.sync({force: true})
    console.log('Connection has ben established succesfully')
app.listen(3000)
console.log('Server on port ', 3000)
}catch (error){
console.log('Unable to connect to the database', error)
}
}

main();