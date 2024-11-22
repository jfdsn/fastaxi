import { Request, Response } from "express";
import { InvalidDataError, InvalidDistanceError, DriverNotFoundError } from "../utils/errors";
import { validateConfirmData } from "../services/validateService";



interface ConfirmRequest extends Request {
    body: {
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
};

export const confirmController = async (req: ConfirmRequest , res: Response) => {
    try {
        const {customer_id, origin, destination, distance, driver} = req.body;

        validateConfirmData(customer_id, origin, destination, distance, driver);
        
        //TODO: service - salvar os dados no BD
        res.status(200).json({ "sucess": true })
    } catch (err) {
        //TODO: tratamento dos erros
        if(err instanceof InvalidDataError) {
            res.status(400).json({
                error_code: "INVALID_DATA",
                error_description: err.message,
            });
        };

        if(err instanceof DriverNotFoundError) {
            res.status(404).json({
                error_code: "DRIVER_NOT_FOUND",
                error_description: err.message,
            });
        };

        if(err instanceof InvalidDistanceError) {
            res.status(406).json({
                error_code: "INVALID_DISTANCE",
                error_description: err.message,
            });
        };

        console.log(err);
    };
};