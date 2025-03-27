import { AppointmentDto } from "../dto/appointment.dto";
import { StatusAppointment } from "../enums/StatusAppointment";
import { Appointment } from "../entities/Appointment";
import { AppDataSource } from "../config/data-source";
import { getUserByIdService } from "./user.service";

const AppointmentRepository = AppDataSource.getRepository(Appointment);

const createNewAppointmentService = async (appointment: AppointmentDto): Promise<Appointment | null> => {

    const { date, time, appointmentReason, userId } = appointment;

    const foundUser = await getUserByIdService(userId);

    if (!foundUser) {
        return null;
    }

    const newAppointment:Appointment = AppointmentRepository.create({
        date,
        time,
        appointmentReason,
        user: foundUser,
    })

    await AppointmentRepository.save(newAppointment);
    return newAppointment;
}

const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments = await AppointmentRepository.find({
        relations: ["user"]
    });
    return appointments;
}

const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const foundAppointments = await AppointmentRepository.findOne({
        where: { id },
        relations: ["user"]
    });
    return foundAppointments;
}

const cancelAppointmentService = async (id: number): Promise<Appointment | null> => {
    const appointmentForDelete = await getAppointmentByIdService(id);
    if (!appointmentForDelete) {
        return null;
    }
    appointmentForDelete.status = StatusAppointment.CANCELED;
    await AppointmentRepository.save(appointmentForDelete);
    return appointmentForDelete;
}

export {
    createNewAppointmentService,
    getAllAppointmentsService,
    getAppointmentByIdService,
    cancelAppointmentService
}