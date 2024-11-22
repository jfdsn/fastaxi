import { InvalidDataError } from "../utils/errors";

export const validateData = (customer_id: string, origin: string, destination: string) => {
    if(!customer_id || !origin || !destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };

    if(origin == destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    }; 
};
