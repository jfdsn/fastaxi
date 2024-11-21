import express from 'express';
import { estimateRideRouter } from './routes/estimateRide';
import { confirmRideRouter } from './routes/confirmRide';
import { userRidesRouter } from './routes/userRides';
import { sequelize } from './config/dbConnection';
import { populateDriver } from './config/driverSeeders';
import { Driver } from './models/driver';

const app = express();
const port = 3000;

app.use('/ride/estimate', estimateRideRouter);
app.use('/ride/confirm', confirmRideRouter);
app.use('/ride/:customer_id', userRidesRouter);

app.listen(port, () => {
    console.log(`Server working: localhost:${port}`);
});

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('All models were synchronized successfully.');
        
        populateDriver();
        console.log('Driver table populated successfully.')
    } catch (err) {
        console.log("Databe error: ", err);
    }
})();