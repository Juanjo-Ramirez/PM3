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
exports.initializeAppDataSource = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DATABASE,
    synchronize: true,
    logging: true,
    logger: "debug",
    dropSchema: true,
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
const initializeAppDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield exports.AppDataSource.initialize();
        console.log(`Connected to database ${connection.options.database}`);
    }
    catch (e) {
        console.log(`Error connecting to database ${e}`);
    }
});
exports.initializeAppDataSource = initializeAppDataSource;
