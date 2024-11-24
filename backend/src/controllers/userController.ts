import { Request, Response } from "express";
import { validateUserData, getAllRides, getRidesByDriverId, RidesResponse } from "../services/userService";
import { DriverNotFoundError, InvalidDataError, NoRidesFoundError } from "../utils/errors";

export const userController = async (req: Request, res: Response) => {
    try {
        const customer_id: string= req.params.customer_id;
        const driver_id: number = Number(req.query.driver_id);

        await validateUserData(customer_id, driver_id);

        let result: RidesResponse;
        if(driver_id) {
            result = await getRidesByDriverId(customer_id, driver_id);
        } else {
            result = await getAllRides(customer_id);
        };

        res.status(200).json(result);
    } catch(err) {
        if(err instanceof InvalidDataError) {
            res.status(400).json({
                error_code: "INVALID_DATA",
                error_description: err.message,
            });
            return;
        };

        if(err instanceof DriverNotFoundError) {
            res.status(400).json({
                error_code: "INVALID_DRIVER",
                error_description: err.message,
            });
            return;
        };

        if(err instanceof NoRidesFoundError) {
            res.status(404).json({
                error_code: "NO_RIDES_FOUND",
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