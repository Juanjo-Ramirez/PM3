import { Request, Response } from 'express';

const getAllAppointments = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que retorna todos los turnos'});
};

const getAppointmentById = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que retorna un turno por id'});
};

const createAppointment = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que crea un turno'});
};

const cancelAppointment = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que cancela un turno'});
};

export{
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    cancelAppointment
};