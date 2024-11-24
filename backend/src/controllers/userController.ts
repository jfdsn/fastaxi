import { Request, Response } from "express";
import { validateUserData, getRides } from "../services/userService";
import { DriverNotFoundError, InvalidDataError } from "../utils/errors";

export const userController = async (req: Request, res: Response) => {
    try {
        const customer_id: string= req.params.customer_id;
        const driver_id: number = Number(req.query.driver_id);

        await validateUserData(customer_id, driver_id);

        //TODO: service - resgatar rides do BD (all ou apenas do driver_id informado) ordenado por tempo
        await getRides(customer_id, driver_id);
        
        
    } catch(err) {
        //TODO: retornar error 404 NO_RIDES_FOUND em caso de não achar valores de rides
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

        res.status(500).json({
            error_code: "INTERNAL_SERVER_ERROR",
            error_description: "Ocorreu um erro inesperado",
        });

        console.log(err);

        return;
    };
};