"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments_controller_1 = require("../controllers/appointments.controller");
const router = (0, express_1.Router)();
router.get("/", appointments_controller_1.getAllApointments);
router.get("/:id", appointments_controller_1.getApointmentById);
router.post("/schedule", appointments_controller_1.createNewApointment);
router.put("/cancel/:id", appointments_controller_1.cancelApointment);
exports.default = router;
