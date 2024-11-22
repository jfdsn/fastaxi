import { sequelize } from "../config/dbConnection";
import { Driver } from "./driver";
const { DataTypes } = require('sequelize');

export const Ride = sequelize.define(
    'Ride',
    {
       customer_id: {
         type: DataTypes.INTEGER,
         autoIncrement: false,
         primaryKey: true,
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
         allowNull: true,
       },
       value: {
         type: DataTypes.DECIMAL(5,2),
         allowNull: false,
       },
       driver_id: {
         type: DataTypes.INTEGER,
         references: {
            model: Driver,
            key: 'id',
         },
       },
    }
);