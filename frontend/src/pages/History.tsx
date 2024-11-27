import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { api } from "../utils/api";
import { DriverSelect } from "../components/DriverSelect";
import { ApiResponse, RidesList } from "../components/RidesList";

function History() {
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
        const route = driverId === "All"? `/${customerId}` : `/${customerId}?driver_id=${driverId}`
        api.get(route)
        .then(response => {
            const apiData: ApiResponse = response.data.data;
            setData(apiData);
        })
        .catch(error => {
            console.log(error)
        })
    };
    
    return (
        <div>
            <p>History page</p>
            <Input 
                name="customerId" 
                value={customerId}
                onChange={handleChange}
                placeholder="Digite o id de usuário"
            >
                Id do usuário:
            </Input>
            <div>
                <DriverSelect onChange={handleDriverChange} options={driverOptions}/>
                <Button onClick={handleSubmit}>Buscar</Button>
            </div>
            <RidesList data={data}/>
        </div>
    )
}

export default History;