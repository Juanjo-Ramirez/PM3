"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentsService = exports.createNewAppointmentService = void 0;
const StatusAppointment_1 = require("../enums/StatusAppointment");
const Appointment_1 = require("../entities/Appointment");
const data_source_1 = require("../config/data-source");
const user_service_1 = require("./user.service");
const AppointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment);
const createNewAppointmentService = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, appointmentReason, userId } = appointment;
    const foundUser = yield (0, user_service_1.getUserByIdService)(userId);
    if (!foundUser) {
        return null;
    }
    const newAppointment = AppointmentRepository.create({
        date,
        time,
        appointmentReason,
        user: foundUser,
    });
    yield AppointmentRepository.save(newAppointment);
    return newAppointment;
});
exports.createNewAppointmentService = createNewAppointmentService;
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield AppointmentRepository.find({
        relations: ["user"]
    });
    return appointments;
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointments = yield AppointmentRepository.findOne({
        where: { id },
        relations: ["user"]
    });
    return foundAppointments;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentForDelete = yield getAppointmentByIdService(id);
    if (!appointmentForDelete) {
        return null;
    }
    appointmentForDelete.status = StatusAppointment_1.StatusAppointment.CANCELED;
    yield AppointmentRepository.save(appointmentForDelete);
    return appointmentForDelete;
});
exports.cancelAppointmentService = cancelAppointmentService;
