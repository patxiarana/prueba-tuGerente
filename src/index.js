import app from './app.js'
import {sequelize} from './database/database.js'

import './models/Booking.js'

async function main(){
    try{
    await sequelize.sync({force: false})
    console.log('Connection has ben established succesfully')
app.listen(5000)
console.log('Server on port ', 5050)
}catch (error){
console.log('Unable to connect to the database', error)
}
}

main();