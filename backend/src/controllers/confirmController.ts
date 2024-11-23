import { Request, Response } from "express";
import { InvalidDataError, InvalidDistanceError, DriverNotFoundError } from "../utils/errors";
import { saveRide, validateConfirmData } from "../services/confirmService";


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

        await validateConfirmData(customer_id, origin, destination, distance, driver);
        
        await saveRide(req.body);

        res.status(200).json({ "sucess": true })
    } catch (err) {
        
        if(err instanceof InvalidDataError) {
            res.status(400).json({
                error_code: "INVALID_DATA",
                error_description: err.message,
            });
            return;
        };

        if(err instanceof DriverNotFoundError) {
            res.status(404).json({
                error_code: "DRIVER_NOT_FOUND",
                error_description: err.message,
            });
            return;
        };

        if(err instanceof InvalidDistanceError) {
            res.status(406).json({
                error_code: "INVALID_DISTANCE",
                error_description: err.message,
            });
            return;
        };

        res.status(500).json({
            error_code: "INTERNAL_SERVER_ERROR",
            error_description: "Ocorreu um erro inesperado",
        });

        console.log(err);

        return;
    };
};