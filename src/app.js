import express from 'express';
import bookingsroutes from '../src/routes/bookings.routes.js'


const app = express();

//middlewars
app.use(express.json())


app.use(bookingsroutes)
export default app;