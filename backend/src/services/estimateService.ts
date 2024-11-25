import { Op } from "sequelize";
import { DriverModel } from "../models/driver";
import { InvalidDataError } from "../utils/errors";
import { ApiResponse } from "./routesApiService";


export const validateEstimateData = (customer_id: string, origin: string, destination: string) => {
    if(!customer_id || !origin || !destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };

    if(origin == destination) {
        throw new InvalidDataError('Os dados fornecidos no corpo da requisição são inválidos');
    };
};

export const formatResponse = async (apiResponse: ApiResponse) => {
    try {
        const distance = apiResponse.routes[0].legs[0].distanceMeters;
        const validDrivers = await getDriversByDistance(distance);

        return {
            origin: {
                latitude: apiResponse.routes[0].legs[0].startLocation.latLng.latitude,
                longitude: apiResponse.routes[0].legs[0].startLocation.latLng.longitude
            },
            destination: {
                latitude: apiResponse.routes[0].legs[0].endLocation.latLng.latitude,
                longitude: apiResponse.routes[0].legs[0].endLocation.latLng.longitude
            },
            distance: apiResponse.routes[0].legs[0].distanceMeters / 1000,
            duration: apiResponse.routes[0].legs[0].duration,
            options: [validDrivers],
            routeResponse: apiResponse
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const getDriversByDistance = async (distance: number) => {
    const validDrivers = await DriverModel.findAll({
        where: {
            min_distance: {
                [Op.lte]: distance / 1000,
            },
        },
        order: [['value', 'ASC']],
        attributes: [
            'id',
            'name',
            'description',
            'vehicle',
            'comment',
            'rating',
            'value',
        ],
    });

    return validDrivers.map(driver => ({
        id: driver.id,
        name: driver.name,
        description: driver.description,
        vehicle: driver.vehicle,
        review: {
            rating: driver.rating,
            comment: driver.comment 
        },
        value: driver.value * distance / 1000 
    }));
};