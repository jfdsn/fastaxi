import { Request, Response } from "express";
import { InvalidDataError } from "../utils/errors";
import { validateEstimateData } from "../services/estimateService";



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

        validateEstimateData(customer_id, origin, destination);
        
        //TODO: service - consumir api google e builder da res
        res.status(200).send("resp temporaria")
    } catch (err) {
        //TODO: tratamento dos erros
        if(err instanceof InvalidDataError) {
            res.status(400).json({
                error_code: "INVALID_DATA",
                error_description: err.message,
            });
            return;
        }

        res.status(500).json({
            error_code: "INTERNAL_SERVER_ERROR",
            error_description: "Ocorreu um erro inesperado",
        });

        console.log(err);

        return;
    }
};