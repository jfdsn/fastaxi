import { Request, Response } from "express";
import { InvalidDataError } from "../utils/errors";
import { validateData } from "../services/validateService";



interface EstimateRequest extends Request {
    body: {
        "customer_id": string,
        "origin": string,
        "destination": string,
    };
};

export const estimateController = async (req: EstimateRequest , res: Response) => {
    try {
        const {customer_id, origin, destination} = req.body;

        validateData(customer_id, origin, destination);
        
        //TODO: service - consumir api google e builder da res
    } catch (err) {
        //TODO: tratamento dos erros
        if(err instanceof InvalidDataError) {
            res.status(400).json({
                error_code: "INVALID_DATA",
                error_description: err.message,
            });
        }
        console.log(err);
    }
};