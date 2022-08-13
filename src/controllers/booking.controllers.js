import { Booking } from "../models/Booking.js"



export const getBookings = async (req, res) => {
try{

const Bookings = await  Booking.findAll()
res.json(Bookings)

}catch(error){

res.status(500).json({mesage:error.mesage})
}
}


export const createBooking = async (req, res) => {
    try{

const {numberofdays, billingdata,identificationdata,amount,condition,  roomdetail} = req.body
 const newBooking = await  Booking.create({
    numberofdays,
     billingdata,
     identificationdata,
     amount,
     condition,
     roomdetail
    })
    res.json(newBooking)

} catch(error){

res.status(500).json({mesage:error.mesage})
}
}



export const updateBooking = async (req,res) => {
try{    

const {id} = req.params
const {condition} = req.body 

const booking = await Booking.findByPk(id)
booking.condition = condition
await booking.save()
res.json(booking)

}catch(error){
 res.status(500).json({mesage:error.mesage})
}
}
