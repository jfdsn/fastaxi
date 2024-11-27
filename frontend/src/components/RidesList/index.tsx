import React from "react";
import { RideCard, RideInfo, RideListContainer, Title,  } from "./style";
import { formatDuration } from "../../utils/formatDuration";

interface Driver {
    id: number;
    name: string;
};

interface Ride {
    date: string;
    destination: string;
    distance: number;
    driver: Driver;
    duration: string;
    id: number;
    origin: string;
    value: number;
};

export interface ApiResponse {
    customer_id: string;
    rides: Ride[];
    description: string;
};

interface RidesListProps {
    data: ApiResponse;
};

export const RidesList: React.FC<RidesListProps> = ({ data }) => {
    return (
      <RideListContainer>
        <Title>Lista de Viagens</Title>
        {data.rides.length > 0 ? (
          data.rides.map((ride) => (
            <RideCard key={ride.id}>
              <RideInfo>
                <span>Data e Hora:</span> {new Date(ride.date).toLocaleString()}
              </RideInfo>
              <RideInfo>
                <span>Motorista:</span> {ride.driver.name}
              </RideInfo>
              <RideInfo>
                <span>Origem:</span> {ride.origin}
              </RideInfo>
              <RideInfo>
                <span>Destino:</span> {ride.destination}
              </RideInfo>
              <RideInfo>
                <span>Distância:</span> {ride.distance.toFixed(2)} km
              </RideInfo>
              <RideInfo>
                <span>Tempo:</span> {formatDuration(ride.duration)}
              </RideInfo>
              <RideInfo>
                <span>Valor:</span> R$ {ride.value.toFixed(2)}
              </RideInfo>
            </RideCard>
          ))
        ) : (
          <p>Nenhuma viagem encontrada.</p>
        )}
      </RideListContainer>
    );
};