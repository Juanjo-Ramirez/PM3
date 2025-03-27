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
exports.checkUserCredentialService = exports.createUserCredentialService = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
const bcrypt_1 = __importDefault(require("bcrypt"));
const CredentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
const createUserCredentialService = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = credential;
    const newCredential = CredentialRepository.create({
        username,
        password
    });
    yield CredentialRepository.save(newCredential);
    return newCredential;
});
exports.createUserCredentialService = createUserCredentialService;
const checkUserCredentialService = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = credential;
    const foundCredentials = yield CredentialRepository.findOne({
        where: { username },
        relations: ["user"]
    });
    if (!foundCredentials)
        return null;
    const isPasswordValid = yield bcrypt_1.default.compare(password, foundCredentials.password);
    if (isPasswordValid) {
        return foundCredentials.user; // Usuario correcto
    }
    return null;
});
exports.checkUserCredentialService = checkUserCredentialService;
