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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdService = exports.getAllUserService = exports.createUserService = void 0;
const credentials_service_1 = require("./credentials.service");
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
// import { Credential } from "../entities/Credential"
const UserRepository = data_source_1.AppDataSource.getRepository(User_1.User);
// const CredentialRepository = AppDataSource.getRepository(Credential)
const createUserService = (name, email, birthDate, nDni, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    yield queryRunner.startTransaction();
    try {
        // const existingUser = await UserRepository.findOne({ where: [{ email }, { nDni }] });
        //     if (existingUser) {
        //         console.log("Email o DNI ya existe")
        //         throw new Error("El email o DNI ya están registrados.");
        //     }
        // const existingCredential = await CredentialRepository.findOne({ where: { username } });
        //     if (existingCredential) {
        //         console.log("Username ya existe")
        //         throw new Error("El nombre de usuario ya está en uso.");
        //     }
        const newUser = UserRepository.create({ name, email, birthDate, nDni });
        yield queryRunner.manager.save(newUser);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newCredential = yield (0, credentials_service_1.createUserCredentialService)({ username, password: hashedPassword });
        newUser.credentials = newCredential;
        yield queryRunner.manager.save(newUser);
        yield queryRunner.commitTransaction();
        return newUser;
    }
    catch (error) {
        yield queryRunner.rollbackTransaction();
        throw Error(`Error al crear el usuario. ${error}`);
    }
    finally {
        yield queryRunner.release();
    }
});
exports.createUserService = createUserService;
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const AllUsers = yield UserRepository.find();
    return AllUsers;
});
exports.getAllUserService = getAllUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield UserRepository.findOne({
        where: { id },
        relations: ["appointments"]
    });
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
