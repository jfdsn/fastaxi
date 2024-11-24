import express from 'express';
import { estimateRideRouter } from './routes/estimateRoute';
import { confirmRideRouter } from './routes/confirmRoute';
import { userRidesRouter } from './routes/userRoute';
import { populateDriver } from './config/driverSeeders';
import { DriverModel } from './models/driver';
import { RideModel } from './models/ride';
import { initializeModels } from './config/initializeModels';


const app = express();
const port = 3000;

app.use(express.json());

app.use('/ride/estimate', estimateRideRouter);
app.use('/ride/confirm', confirmRideRouter);
app.use('/ride', userRidesRouter);

app.listen(port, () => {
    console.log(`Server working: localhost:${port}`);
});

(async () => {
    try {
        await initializeModels();
        
        await populateDriver();
    } catch (err) {
        console.log("Databe error: ", err);
    }
})();