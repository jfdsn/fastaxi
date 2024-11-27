import { Request, Response } from "express";
import { buildMapUrl } from "../services/staticMapService";

interface StaticMapRequest extends Request {
    body: {
        origin: {
            latitude: number;
            longitude: number;
        };
        destination: {
            latitude: number;
            longitude: number;
        };
    };
}

export const staticMapController = (req: StaticMapRequest, res: Response) => {
    try {
        const {origin, destination} = req.body;
    
        if(!origin || !destination) {
            res.status(400).json({ error: "Origin and destination are required." });
        }
    
        const mapUrl = buildMapUrl(origin, destination);
    
        res.status(200).json({ mapUrl });
    }catch (err) {
        console.log(err);
    }
};