"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.getUserController);
router.get("/:id", user_controller_1.getUserByIDController);
router.post("/register", user_controller_1.createUserController);
router.post("/login", user_controller_1.loginUserController);
exports.default = router;
