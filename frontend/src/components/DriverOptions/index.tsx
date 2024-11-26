import React from "react";
import { api } from "../../utils/api";
import { CardContainer, Title, DriverCard, Description, DriverInfo, Name, Price, Rating, Vehicle } from "./style";
import { Button } from "../Button";

interface Driver {
    id: string;
    name: string;
    description: string;
    vehicle: string;
    review: {
        rating: number,
        comment: string
    };
    value: number;
};

interface DriverOptionsProps {
    drivers: Driver[];
};

export const DriverOptions: React.FC<DriverOptionsProps> = ({ drivers }) => {
    const hasDrivers = drivers && drivers.length > 0;    
    
    //TODO: arrumar função do botão confirmar
    const handleChooseDriver = async (driverId: string) => {
        try {
            const response = await api.post("/ride/confirm", { driverId });
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao confirmar viagem:", error);
        }
    };
    
    return (
      <CardContainer>
        <Title>{hasDrivers ? "Escolha um motorista: " : "Nenhum motorista disponível para sua rota :("}</Title>
        {drivers.map(driver => (
          <DriverCard key={driver.id}>
            <DriverInfo>
              <Name>{driver.name}</Name>
              <Description>{driver.description}</Description>
              <Vehicle>Veículo: {driver.vehicle}</Vehicle>
              <Price>Valor: R$ {driver.value.toFixed(2)}</Price>
              <Rating>Avaliação: {driver.review.rating}/5</Rating>
              <p>{driver.review.comment}</p>
            </DriverInfo>
            <Button onClick={() => handleChooseDriver(driver.id)}>
              Confirmar
            </Button>
          </DriverCard>
        ))}
      </CardContainer>
    );
  };