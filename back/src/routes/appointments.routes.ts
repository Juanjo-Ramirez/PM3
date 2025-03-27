import { Router } from 'express';
import { getAllApointments, getApointmentById, createNewApointment, cancelApointment } from '../controllers/appointments.controller';

const router = Router();

router.get("/", getAllApointments)
router.get("/:id", getApointmentById)
router.post("/schedule", createNewApointment)
router.put("/cancel/:id", cancelApointment)

export default router;