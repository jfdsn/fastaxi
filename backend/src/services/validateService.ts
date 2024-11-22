import { DriverNotFoundError, InvalidDataError, InvalidDistanceError } from "../utils/errors";

interface Driver {
    id: number,
    name: string,
};

export const validateEstimateData = (customer_id: string, origin: string, destination: string) => {
    if(!customer_id || !origin || !destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };

    if(origin == destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };
};

export const validateConfirmData = (customer_id: string, origin: string, destination: string, distance: number, driver: Driver) => {
    if(!customer_id || !origin || !destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };

    if(origin == destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };
    
    //TODO: verificar a presença do motorista no BD
    if(!driver.id) {
        throw new DriverNotFoundError('Motorista não encontrado');
    };
    

    //TODO: retornar o valor minimo do motorista no BD
    let driverMinDistance = 5;
    if(distance >= driverMinDistance) {
        throw new InvalidDistanceError('Quilometragem inválida para o motorista');
    };
};