"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = __importDefault(require("./users.routes"));
const appointments_routes_1 = __importDefault(require("./appointments.routes"));
const router = (0, express_1.Router)();
router.use('/users', users_routes_1.default);
router.use('/appointments', appointments_routes_1.default);
exports.default = router;
