import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ErrorInfo } from "../components/ErrorInfo";

function Home() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/options');
    }

    return (
        <>
        <p>Home page</p>
        <ErrorInfo>Um error aconteceu</ErrorInfo>
        <Button onClick={handleClick}>Teste</Button>
        </>
    )
}

export default Home;