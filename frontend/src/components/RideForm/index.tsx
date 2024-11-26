import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { ErrorInfo } from "../ErrorInfo";
import { FormContainer } from "./style";

export const RideForm = () => {
    const [formValues, setFormValues] = useState({
        userId: "",
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
            customer_id: formValues.userId,
            origin: formValues.origin,
            destination: formValues.destination
        }).then(response => {
            navigate('/options', { state: { rideData: response.data?.data } });
        })
        .catch(error => {
            const message = error.response?.data?.error_description || "Ocorreu um erro inesperado";
            setErrorMessage(message);
        });
    };

    return (
        <FormContainer>
            <ErrorInfo>{errorMessage}</ErrorInfo>  
            <Input 
                name="userId" 
                value={formValues.userId}
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