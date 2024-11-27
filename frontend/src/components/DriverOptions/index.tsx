import React, { useState } from "react";
import { api } from "../../utils/api";
import { CardContainer, Title, DriverCard, Description, DriverInfo, Name, Price, Rating, Vehicle } from "./style";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { ErrorInfo } from "../ErrorInfo";

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
    rideData: any;
    customerId: string;
    origin: string;
    destination: string;
};

export const DriverOptions: React.FC<DriverOptionsProps> = ({
    drivers,
    rideData,
    customerId,
    origin,
    destination
}) => {
    const hasDrivers = drivers && drivers.length > 0;
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();    
    
    //TODO: arrumar função do botão confirmar
    const handleChooseDriver = async (driverId: string, driverName: string, value: number) => {
        setErrorMessage("");    
        
        await api.patch("/confirm", {
            customer_id: customerId,
            origin: origin, 
            destination: destination, 
            distance: rideData.distance,
            duration: rideData.distance,
            driver: {
                id: driverId,
                name: driverName
            },
            value: value.toFixed(2)
        }).then( () => {
            navigate('/history');
        }).catch(error => {
            const message = error.response?.data?.error_description || "Ocorreu um erro inesperado";
            setErrorMessage(message);
        });
    };
    
    return (
      <CardContainer>
        <Title>{hasDrivers ? "Escolha um motorista: " : "Nenhum motorista disponível para sua rota :("}</Title>
        <ErrorInfo>{errorMessage}</ErrorInfo>  
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
            <Button onClick={() => handleChooseDriver(driver.id, driver.name, driver.value)}>
              Confirmar
            </Button>
          </DriverCard>
        ))}
      </CardContainer>
    );
  };