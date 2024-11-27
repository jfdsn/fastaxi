import { Router } from "express";
import { staticMapController } from "../controllers/staticMapController";


const router = Router();

router.post('/', staticMapController);


export { router as staticMapRouter }