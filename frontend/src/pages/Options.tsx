import { useLocation } from "react-router-dom";
import { DriverOptions } from "../components/DriverOptions";

function Options() {
    const location = useLocation();
    const { rideData, customerId, origin, destination } = location.state; 

    return (
        <>
            <p>Options page</p>
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