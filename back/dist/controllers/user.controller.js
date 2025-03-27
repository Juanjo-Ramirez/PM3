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
exports.loginUserController = exports.getUserByIDController = exports.getUserController = exports.createUserController = void 0;
const user_service_1 = require("../services/user.service");
const credentials_service_1 = require("../services/credentials.service");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthDate, nDni, username, password } = req.body;
        if (!name || !email || !birthDate || !nDni || !username || !password) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }
        const newUser = yield (0, user_service_1.createUserService)(name, email, birthDate, nDni, username, password);
        res.status(201).json({ success: true, message: "User created", data: newUser });
        return;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error === null || error === void 0 ? void 0 : error.message : "Hubo un error inesperado";
        res.status(400).json({ messaje: "Los datos son incorrectos.", error: errorMessage });
    }
});
exports.createUserController = createUserController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield (0, user_service_1.getAllUserService)();
    res.status(200).json(allUsers);
});
exports.getUserController = getUserController;
const getUserByIDController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userById = yield (0, user_service_1.getUserByIdService)(+id);
        if (userById) {
            res.status(200).json(userById);
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
});
exports.getUserByIDController = getUserByIDController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const logged = yield (0, credentials_service_1.checkUserCredentialService)({ username, password });
        console.log(logged);
        if (logged) {
            res.status(200).json({ login: true, message: "Login successful", userId: logged.id });
            return;
        }
        else {
            res.status(401).json({ login: false, message: "Invalid username or password" });
            return;
        }
    }
    catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
});
exports.loginUserController = loginUserController;
