import React, { useState } from "react";
import { api } from "../../utils/api";
import { CardContainer, DriverCard, Description, DriverInfo, Name, Price, Rating, Comment, Vehicle, AvaliationContainer, DriverOptionsContainer } from "./style";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { ErrorInfo } from "../ErrorInfo";


interface Coordinate {
  latitude: number,
  longitude: number
};

interface RideData {
      destination: Coordinate,
      distance: number,
      duration: string,
      options: [],
      origin: Coordinate,
      routeResponse: [],
};

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
    rideData: RideData;
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
    
    const handleChooseDriver = async (driverId: string, driverName: string, value: number) => {
        setErrorMessage("");    
        
        await api.patch("/confirm", {
            customer_id: customerId,
            origin: origin, 
            destination: destination, 
            distance: rideData.distance,
            duration: rideData.duration,
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
            if(message !== "Ocorreu um erro inesperado") {
              alert("Verifique se preencheu corretamente os dados.");
            } else alert("Ops estamos com algum problema no momento! Tente novamente.")
        });
    };
    
    return (
      <DriverOptionsContainer>
        <h3>{hasDrivers ? "Escolha um motorista: " : "Nenhum motorista disponível para sua rota :("}</h3>
        <ErrorInfo>{errorMessage}</ErrorInfo>  
        <CardContainer>
          {drivers.map(driver => (
            <DriverCard key={driver.id}>
              <DriverInfo>
                <Name>{driver.name}</Name>
                <Description>{driver.description}</Description>
                <Vehicle>Veículo: {driver.vehicle}</Vehicle>
                <Price>Valor: R$ {driver.value.toFixed(2)}</Price>
                <AvaliationContainer>
                  <Rating>Avaliação: {driver.review.rating}/5</Rating>
                  <Comment>{driver.review.comment}</Comment>
                </AvaliationContainer>
              </DriverInfo>
              <Button onClick={() => handleChooseDriver(driver.id, driver.name, driver.value)}>
                Confirmar
              </Button>
            </DriverCard>
          ))}
        </CardContainer>
      </DriverOptionsContainer>
    );
  };