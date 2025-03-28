"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppointmentsControllers_1 = require("../controllers/AppointmentsControllers");
const router = (0, express_1.Router)();
router.get("/", AppointmentsControllers_1.getAllAppointments);
router.get("/:id", AppointmentsControllers_1.getAppointmentById);
router.post("/schedule", AppointmentsControllers_1.createAppointment);
router.put("/cancel/:id", AppointmentsControllers_1.cancelAppointment);
exports.default = router;
