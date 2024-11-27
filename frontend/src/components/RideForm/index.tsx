import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { ErrorInfo } from "../ErrorInfo";
import { FormContainer } from "./style";

interface Coordinate {
    latitude: number,
    longitude: number
};

export interface RideData {
   response: {
       destination: Coordinate,
       distance: number,
       duration: string,
       options: [],
       origin: Coordinate,
       routeResponse: [],
   } 
};

export const RideForm = () => {
    const [formValues, setFormValues] = useState({
        customerId: "",
        origin: "",
        destination: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        setErrorMessage("");

        //Chama a api na rota ride/estimate com os valores preenchidos
        await api.post("/estimate", {
            customer_id: formValues.customerId,
            origin: formValues.origin,
            destination: formValues.destination
        }).then(response => {
            //Caso tenha sucesso, navega para pagina options enviando o response e os dados preenchidos
            const rideData: RideData = response.data;
            navigate('/options', { 
                state: { 
                    rideData: rideData.response,
                    customerId: formValues.customerId,
                    origin: formValues.origin,
                    destination: formValues.destination
            }});
        })
        .catch(error => {
            const message = error.response?.data?.error_description || "Ocorreu um erro inesperado";
            setErrorMessage(message);
            if(message !== "Ocorreu um erro inesperado") {
                alert("Verifique se preencheu corretamente os dados.");
            } else alert("Ops estamos com algum problema no momento! Tente novamente.")
        });
    };

    return (
        <FormContainer>
            <h3>Faça a estimativa para sua rota:</h3>  
            <ErrorInfo>{errorMessage}</ErrorInfo>
            <Input 
                name="customerId" 
                value={formValues.customerId}
                onChange={handleChange}
                placeholder="Digite o id de usuário"
            >
                Id do usuário:
            </Input>
            <Input 
                name="origin" 
                value={formValues.origin} 
                onChange={handleChange}
                placeholder="Digite o endereço de origem"
                >
                Endereço de origem:
            </Input>
            <Input 
                name="destination"
                value={formValues.destination}
                onChange={handleChange}
                placeholder="Digite o endereço de destino"
                >
                Endereço de destino:
            </Input>
            <Button onClick={handleSubmit}>Estimar Valor</Button>
        </FormContainer>
    )
};