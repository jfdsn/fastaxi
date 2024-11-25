import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

export interface ApiResponse {
    routes: {
      legs: {
        distanceMeters: number;
        duration: string;
        startLocation: {
          latLng: {
            latitude: number;
            longitude: number;
          };
        };
        endLocation: {
          latLng: {
            latitude: number;
            longitude: number;
          };
        };
      }[];
    }[];
}

export const routesApiService = async (origin: string, destination: string): Promise<ApiResponse> => {
    const apiKey = process.env.GOOGLE_API_KEY ?? '';
    const url = 'https://routes.googleapis.com/directions/v2:computeRoutes';

    const requestBody = {
        origin: { address: origin},
        destination: {address: destination},
        travelMode: "DRIVE"
    };

    const fieldMask = 'routes.legs.distanceMeters,routes.legs.duration,routes.legs.startLocation,routes.legs.endLocation';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask': fieldMask,
            },
            body: JSON.stringify(requestBody),
        });

        if(!response.ok) {
            throw new Error(`Error fetching route data: ${response.status}`);
        };
        
        return response.json();
    } catch (err){
        console.error('Error: ', err);
        throw err;
    }
};