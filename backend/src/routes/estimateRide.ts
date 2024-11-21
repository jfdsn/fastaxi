import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    res.send("Logica aqui");
});


export { router as estimateRideRouter }