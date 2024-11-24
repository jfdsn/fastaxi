import { Router } from "express";
import { userController } from "../controllers/userController";

const router = Router();

router.get('/:customer_id', userController);


export { router as userRidesRouter }