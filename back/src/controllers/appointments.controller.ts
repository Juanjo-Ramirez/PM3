import { Request, Response } from 'express';
import { getAllAppointmentsService, getAppointmentByIdService, createNewAppointmentService, cancelAppointmentService } from '../services/appointments.service';

const getAllApointments = async (req: Request, res: Response) => {
    const allAppointments = await getAllAppointmentsService();
    res.status(200).json(allAppointments);
}

const getApointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = (req.params);
        const appointmentById = await getAppointmentByIdService(+id);
        if (appointmentById) {
            res.status(200).json(appointmentById);
        } else {
            res.status(404).json({ message: "Appointment not found" });
        }
    } catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }

}

const createNewApointment = async (req: Request, res: Response) => {
    try {
        const { date, time, appointmentReason, userId } = req.body;

        if(!date || !time || !userId) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        
        const createAppointment = await createNewAppointmentService({ date, time, appointmentReason, userId });

        if (!createAppointment) { 
            res.status(400).json({ message: "User Not Found",});
        } else {
            res.status(201).json({ message: "Appointment created", createAppointment });
        }
    } catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }

}

const cancelApointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const cancelAppointment = await cancelAppointmentService(+id);

    if (cancelAppointment) {
        res.status(200).json({ success: true, message: "Appointment canceled", data: cancelAppointment });
    } else {
        res.status(404).json({ success: false, message: "Appointment not canceled" });
    }
    } catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
    

}

export { getAllApointments, getApointmentById, createNewApointment, cancelApointment };