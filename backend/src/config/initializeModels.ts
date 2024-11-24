import { initDriverModel } from "../models/driver";
import { initRideModel } from "../models/ride";
import { sequelize } from "./dbConnection";


export const initializeModels = async () => {
    await Promise.all([
        initDriverModel(sequelize),
        initRideModel(sequelize),
        sequelize.sync({force: true}),
    ]);

    console.log('All models were synchronized successfully.');
};