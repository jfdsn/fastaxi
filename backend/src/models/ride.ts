import { DriverModel } from "./driver";
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface RideAttributes {
  ride_id: number;
  customer_id: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  value: number;
  driver_id?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

interface RideCreationAttributes extends Optional<RideAttributes, "ride_id"> {}

class Ride extends Model<RideAttributes, RideCreationAttributes> implements RideAttributes {
  public ride_id!: number;
  public customer_id!: string;
  public origin!: string;
  public destination!: string;
  public distance!: number;
  public duration!: string;
  public value!: number;
  public driver_id!: number | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

const initRideModel = (sequelize: Sequelize): typeof Ride => {
  Ride.init(
    {
      ride_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id: {
        type: DataTypes.STRING,
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
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      driver_id: {
        type: DataTypes.INTEGER,
        references: {
          model: DriverModel,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "rides",
    }
  );

  return Ride;
};

export { Ride as RideModel, initRideModel, RideAttributes };