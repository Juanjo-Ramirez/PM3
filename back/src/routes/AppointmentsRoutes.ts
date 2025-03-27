import { Router } from 'express';
import { getAllAppointments, getAppointmentById, createAppointment, cancelAppointment } from '../controllers/AppointmentsControllers';

const router = Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.post("/schedule", createAppointment);
router.put("/cancel/:id", cancelAppointment);

export default router;