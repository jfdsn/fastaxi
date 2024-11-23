import { sequelize } from "../config/dbConnection";
import { DataTypes } from 'sequelize';

export const Driver = sequelize.define(
    'Driver',
    {
       id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
       },
       name: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       description: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       vehicle: {
         type: DataTypes.STRING,
         allowNull: false,
       },
       avaliation: {
         type: DataTypes.STRING,
         allowNull: true,
       },
       tax_per_km: {
         type: DataTypes.DECIMAL(5,2),
         allowNull: false,
       },
       min_distance: {
         type: DataTypes.INTEGER,
         allowNull: false,
       },
    }
);