import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { api } from "../utils/api";

function History() {
    const [customerId, setCustomerId] = useState("");
    const [driverId, setDriverId] = useState("All");
 
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
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        })
    };
    
    return (
        <>
            <p>History page</p>
            <Input 
                name="customerId" 
                value={customerId}
                onChange={handleChange}
                placeholder="Digite o id de usuário"
            >
                Id do usuário:
            </Input>
            <label htmlFor="drivers">Motorista: </label>
            <select name="drivers" id="drivers" onChange={handleDriverChange}>
                <option value="1">Homer Simpson</option>
                <option value="2">Dominic Toretto</option>
                <option value="3">James Bond</option>
                <option value="All" selected>Todos</option>
            </select>
            <Button onClick={handleSubmit}>Buscar</Button>
        </>
    )
}

export default History;