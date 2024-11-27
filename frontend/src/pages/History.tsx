import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { api } from "../utils/api";
import { DriverSelect } from "../components/DriverSelect";
import { ApiResponse, RidesList } from "../components/RidesList";
import { ErrorInfo } from "../components/ErrorInfo";

function History() {
    const [errorMessage, setErrorMessage] = useState("");
    const [customerId, setCustomerId] = useState("");
    const [driverId, setDriverId] = useState("All");
    const [data, setData] = useState<ApiResponse>({
        customer_id: '',
        rides: [],
        description: ''
    });

    const driverOptions = [
        {value: "1", name: "Homer Simpson"},
        {value: "2", name: "Dominic Toretto"},
        {value: "3", name: "James Bond"}
    ]
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomerId(event.target.value);
    };

    const handleDriverChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDriverId(event.target.value);
    };

    const handleSubmit = async () => {
        if(customerId === "") {
            setData({
                customer_id: '',
                rides: [],
                description: ''
            });
            alert("Informe o valor de id do usuário!")
        };

        const route = driverId === "All"? `/${customerId}` : `/${customerId}?driver_id=${driverId}`
        api.get(route)
        .then(response => {
            const apiData: ApiResponse = response.data.data;
            setData(apiData);
            setErrorMessage("");
        })
        .catch(error => {
            const message = error.response?.data?.error_description || "Ocorreu um erro inesperado";
            setErrorMessage(message);

            if(message === "Nenhum registro encontrado") {
                alert("Não há registros para os dados informados.")
                setData({
                    customer_id: '',
                    rides: [],
                    description: ''
                });
            }
        })
    };
    
    return (
        <div className="flex-column">
            <h3>Faça uma busca pelas viagens já confirmadas:</h3>
            <div>
                <Input 
                    name="customerId" 
                    value={customerId}
                    onChange={handleChange}
                    placeholder="Digite o id de usuário"
                >
                    Id do usuário:
                </Input>
                <div className="flex-row">
                    <DriverSelect onChange={handleDriverChange} options={driverOptions}/>
                    <Button onClick={handleSubmit}>Buscar</Button>
                </div>
            </div>
            <ErrorInfo>{errorMessage}</ErrorInfo> 
            <RidesList data={data}/>
        </div>
    )
}

export default History;