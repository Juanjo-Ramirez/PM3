import { Router } from 'express';
import { getUsers, getUserById, createUser, loginUser } from '../controllers/UserControllers';

const router = Router();

router.get('/', getUsers);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.post("/login", loginUser);

export default router; 