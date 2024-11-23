import { sequelize } from "../config/dbConnection";
import { DriverModel } from "./driver";
import { DataTypes } from 'sequelize';

const Ride = sequelize.define(
    'Ride',
    {   
       ride_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
       },
       customer_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
       },
       origin: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       destination: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       distance: {
         type: DataTypes.INTEGER,
         allowNull: false,
       },
       duration: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       value: {
         type: DataTypes.DECIMAL(5,2),
         allowNull: false,
       },
       driver_id: {
         type: DataTypes.INTEGER,
         references: {
            model: DriverModel,
            key: 'id',
         },
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
         allowNull: true,
       },
    },
    {
      indexes: [
        {
          fields: ['customer_id']
        }
      ]
    }
);

export { Ride as RideModel};