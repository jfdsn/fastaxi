import { RideModel } from "../models/ride";
import { DriverModel } from "../models/driver";
import { DriverNotFoundError, InvalidDataError, InvalidDistanceError } from "../utils/errors";

interface RideData {
        "customer_id": string,
        "origin": string,
        "destination": string,
        "distance": number,
        "duration": string,
        "driver": {
            "id": number,
            "name": string,
        },
        "value": number,
};

interface DriverData {
    id: number,
    name: string,
};


export const saveRide = async (ride: RideData ): Promise<void> => {
    await RideModel.create({ 
        customer_id: ride.customer_id,
        origin: ride.origin,
        destination: ride.destination,
        distance: ride.distance,
        duration: ride.duration,
        value: ride.value,
        driver_id: ride.driver.id,
    });
};

export const validateConfirmData = async (customer_id: string, origin: string, destination: string, distance: number, driver: DriverData) => {
    if(!customer_id || !origin || !destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };

    if(origin == destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };
    

    if(!driver || !driver.id) {
        throw new DriverNotFoundError('Motorista não encontrado');
    };

    //Verifica o registro do motorista no BD
    const isDriverRegistered = await DriverModel.findByPk(driver.id);
    if(!isDriverRegistered) {
        throw new DriverNotFoundError('Motorista não encontrado');
    };
    
    //Retorna o valor minimo do motorista no BD
    const driverMinDistance = await getMinDistance(driver.id); 
    if(distance < driverMinDistance) {
        throw new InvalidDistanceError('Quilometragem inválida para o motorista');
    };
};

const getMinDistance = async (id: number) => {
    try {
        const result = await DriverModel.findByPk(id, {attributes: ['min_distance']});
        
        return result?.get('min_distance') as number;
    }catch (err) {
        throw err;
    }

};