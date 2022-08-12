import { Router } from "express";
import {getBookings ,  createBooking, updateBooking } from '../controllers/booking.controllers.js'


const router = Router()

router.get('/bookings', getBookings)
router.post('/booking',  createBooking)
router.put('/booking/:id', updateBooking)




export default router;