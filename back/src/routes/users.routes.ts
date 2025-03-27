import { Router } from 'express';
import { createUserController, getUserController, getUserByIDController, loginUserController } from "../controllers/user.controller";


const router = Router();

router.get("/", getUserController );

router.get("/:id",  getUserByIDController);

router.post("/register", createUserController);

router.post("/login", loginUserController);

    
export default router;
