import { Router } from "express";
import { estimateController } from "../controllers/estimateController";

const router = Router();

router.post('/', estimateController);


export { router as estimateRideRouter }