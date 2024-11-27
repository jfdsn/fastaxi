import React, { useState } from "react";
import { MapStyle } from "./style";
import { api } from "../../utils/api";

interface StaticMapProps {
    origin: { latitude: number; longitude: number };
    destination: { latitude: number; longitude: number };
};

export const StaticMap: React.FC<StaticMapProps> = ({ origin, destination }) => {
    const [mapUrl, setMapUrl] = useState("");

    api.post('/static-map', {
        origin,
        destination
    }).then(response => {
        setMapUrl(response.data.mapUrl);
    }).catch(error => {
        console.log(error);
    });
  
    return (
    <div>
        {mapUrl ? (
            <MapStyle
            src={mapUrl}
            alt={`Mapa mostrando a rota de (${origin.latitude}, ${origin.longitude}) para (${destination.latitude}, ${destination.longitude})`}
            />
        ) : (
            <p>Ops tivemos problemas no carregamento do mapa...</p>
        )}
    </div>
    );
};