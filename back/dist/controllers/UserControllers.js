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
exports.loginUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ messaje: 'Ruta que retorna todos los usuarios' });
    // const users = await UserService.getAllUsers();
    // res.json(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ messaje: 'Ruta que retorna un usuario por id' });
    // const user = await UserService.getUserById(req.params.id);
    // res.json(user);
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ messaje: 'Ruta que crea un usuario' });
    // const user = await UserService.createUser(req.body);
    // res.json(user);
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ messaje: 'Ruta que loguea un usuario' });
    // const user = await UserService.loginUser(req.body);
    // res.json(user);
});
exports.loginUser = loginUser;
