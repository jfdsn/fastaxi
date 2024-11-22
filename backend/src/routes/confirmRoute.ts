import { Router } from "express";

const router = Router();

router.patch('/', (req, res) => {
    res.send("Logica aqui");
});


export { router as confirmRideRouter }