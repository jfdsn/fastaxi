import { DriverModel } from "../models/driver";
import { RideModel } from "../models/ride";
import { DriverNotFoundError, InvalidDataError, NoRidesFoundError } from "../utils/errors";

interface RideDTO {
    id: number;
    date: Date;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    value: number;
    driver: {
      id: number;
      name: string;
    };
}
  
export interface RidesResponse {
    customer_id: string;
    rides: RideDTO[];
}

export const validateUserData = async (customer_id: string, driver_id: number) => {
    if(typeof customer_id !== 'string' || customer_id === '') {
        throw new InvalidDataError('ID não informado');
    };
    
    try {
        if(driver_id) {
            const isDriverRegistered = await DriverModel.findByPk(driver_id);
            if(!isDriverRegistered) {
                throw new DriverNotFoundError('Motorista invalido');
            };
        }
    } catch(err) {
        throw err;
    }
};

export const getAllRides = async (customer_id: string): Promise<RidesResponse>  => {
    try {
        const allRides = await RideModel.findAll({
            where: {
                customer_id: customer_id,
            },
            order: [["createdAt", "DESC"]],
            attributes: [
                "ride_id",
                "origin",
                "destination",
                "distance",
                "duration",
                "driver_id",
                "driver_name",
                "value",
                "createdAt",
            ],
        });

        if(allRides.length === 0) {
            throw new NoRidesFoundError('Nenhum registro encontrado');
        }

        return {
            customer_id: customer_id,
            rides: allRides.map((ride) => ({
                id: ride.ride_id,
                date: ride.createdAt,
                origin: ride.origin,
                destination: ride.destination,
                distance: ride.distance,
                duration: ride.duration,
                value: ride.value,
                driver:
                    {
                        id: ride.driver_id,
                        name: ride.driver_name,
                    },
            })),
        }
    } catch(err) {
        throw err;
    }

};

export const getRidesByDriverId = async (customer_id: string, driver_id: number): Promise<RidesResponse>  => {
    try {
        const allRides = await RideModel.findAll({
            where: {
                customer_id: customer_id,
                driver_id: driver_id
            },
            order: [["createdAt", "DESC"]],
            attributes: [
                "ride_id",
                "origin",
                "destination",
                "distance",
                "duration",
                "driver_id",
                "driver_name",
                "value",
                "createdAt",
            ],
        });

        if(allRides.length === 0) {
            throw new NoRidesFoundError('Nenhum registro encontrado');
        }

        return {
            customer_id: customer_id,
            rides: allRides.map((ride) => ({
                id: ride.ride_id,
                date: ride.createdAt,
                origin: ride.origin,
                destination: ride.destination,
                distance: ride.distance,
                duration: ride.duration,
                value: ride.value,
                driver:
                    {
                        id: ride.driver_id,
                        name: ride.driver_name,
                    },
            })),
        }
    } catch(err) {
        throw err;
    }

};