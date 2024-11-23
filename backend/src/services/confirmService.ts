import { Ride } from "../models/ride";

interface Ride {
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

export const saveRide = async (ride: Ride ) => {
    await Ride.create({ 
        customer_id: ride.customer_id,
        origin: ride.origin,
        destination: ride.destination,
        distance: ride.distance,
        duration: ride.duration,
        value: ride.value,
        driver_id: ride.driver.id,
    });
};