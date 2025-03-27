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
exports.cancelApointment = exports.createNewApointment = exports.getApointmentById = exports.getAllApointments = void 0;
const appointments_service_1 = require("../services/appointments.service");
const getAllApointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield (0, appointments_service_1.getAllAppointmentsService)();
    res.status(200).json(allAppointments);
});
exports.getAllApointments = getAllApointments;
const getApointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = (req.params);
        const appointmentById = yield (0, appointments_service_1.getAppointmentByIdService)(+id);
        if (appointmentById) {
            res.status(200).json(appointmentById);
        }
        else {
            res.status(404).json({ message: "Appointment not found" });
        }
    }
    catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
});
exports.getApointmentById = getApointmentById;
const createNewApointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, appointmentReason, userId } = req.body;
        if (!date || !time || !userId) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const createAppointment = yield (0, appointments_service_1.createNewAppointmentService)({ date, time, appointmentReason, userId });
        if (!createAppointment) {
            res.status(400).json({ message: "User Not Found", });
        }
        else {
            res.status(201).json({ message: "Appointment created", createAppointment });
        }
    }
    catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
});
exports.createNewApointment = createNewApointment;
const cancelApointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancelAppointment = yield (0, appointments_service_1.cancelAppointmentService)(+id);
        if (cancelAppointment) {
            res.status(200).json({ success: true, message: "Appointment canceled", data: cancelAppointment });
        }
        else {
            res.status(404).json({ success: false, message: "Appointment not canceled" });
        }
    }
    catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
});
exports.cancelApointment = cancelApointment;
