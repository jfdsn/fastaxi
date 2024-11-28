require('dotenv').config();

interface Coordinate {
    latitude: number,
    longitude: number
};

export const buildMapUrl = (origin: Coordinate, destination: Coordinate) => {
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=color:green|${origin.latitude},${origin.longitude}&markers=color:red|${destination.latitude},${destination.longitude}&path=color:0xff0000ff|weight:2|${origin.latitude},${origin.longitude}|${destination.latitude},${destination.longitude}&key=${process.env.GOOGLE_API_KEY}`;

    return mapUrl;
};