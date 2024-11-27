import { useLocation } from "react-router-dom";
import { DriverOptions } from "../components/DriverOptions";
import { StaticMap } from "../components/StaticMap";

function Options() {
    const location = useLocation();
    const { rideData, customerId, origin, destination } = location.state; 

    return (
        <>  
            <h3>Sua rota:</h3>
            <StaticMap origin={rideData.origin} destination={rideData.destination}/>
            <DriverOptions 
                drivers={rideData.options[0]}
                rideData={rideData}
                customerId={customerId}
                origin={origin}
                destination={destination}
            />
        </>
        
    )
}

export default Options;