import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface DriverAttributes {
    id: number;
    name: string;
    description: string;
    vehicle: string;
    avaliation?: string | null;
    tax_per_km: number;
    min_distance: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface DriverCreationAttributes extends Optional<DriverAttributes, "id"> {}

class Driver extends Model<DriverAttributes, DriverCreationAttributes> implements DriverAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
    public vehicle!: string;
    public avaliation!: string | null;
    public tax_per_km!: number;
    public min_distance!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

const initDriverModel = (sequelize: Sequelize): typeof Driver => {
  Driver.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
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
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      min_distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "drivers",
      timestamps: true,
    }
  );

  return Driver;
};

export { Driver as DriverModel, initDriverModel, DriverAttributes };