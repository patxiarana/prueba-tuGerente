import {sequelize} from '../database/database.js'
import{DataTypes} from 'sequelize'


export const Booking = sequelize.define('bookings',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    roomdetail:{
        type:DataTypes.STRING,
    },
    numberofdays:{
        type:DataTypes.INTEGER,
    },
    billingdata:{
        type:DataTypes.STRING
    },
    identificationdata:{
        type:DataTypes.STRING
    },
    amount:{
        type:DataTypes.STRING
    },
    condition:{
        type:DataTypes.STRING
    },


})