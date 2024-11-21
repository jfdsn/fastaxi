import express from 'express';
import { estimateRideRouter } from './routes/estimateRide';
import { confirmRideRouter } from './routes/confirmRide';
import { userRidesRouter } from './routes/userRides';

const app = express();
const port = 3000;

app.use('/ride/estimate', estimateRideRouter);
app.use('/ride/confirm', confirmRideRouter);
app.use('/ride/:customer_id', userRidesRouter);

app.listen(port, () => {
    console.log(`Server working: localhost:${port}`);
});