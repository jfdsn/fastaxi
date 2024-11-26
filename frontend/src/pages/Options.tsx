import { useLocation } from "react-router-dom";
import { DriverOptions } from "../components/DriverOptions";

function Options() {
    const location = useLocation();
    const rideData = location.state?.rideData;

    return (
        <>
            <p>Options page</p>
            <DriverOptions drivers={rideData.options[0]}/>
        </>
        
    )
}

export default Options;