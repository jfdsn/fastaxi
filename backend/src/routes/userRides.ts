import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("Logica aqui");
});


export { router as userRidesRouter }