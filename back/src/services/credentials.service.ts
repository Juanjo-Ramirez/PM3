import { CredentialDto } from "../dto/credential.dto";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

const CredentialRepository = AppDataSource.getRepository(Credential);

const createUserCredentialService = async (credential: CredentialDto): Promise<Credential> => {
    const { username, password } = credential;

    const newCredential: Credential = CredentialRepository.create({
        username,
        password
    })
    await CredentialRepository.save(newCredential);

    return newCredential;
}


const checkUserCredentialService = async (
    credential: CredentialDto): Promise<null | User> => {
    const { username, password } = credential;
    const foundCredentials = await CredentialRepository.findOne({
        where: { username },
        relations: ["user"]
    });
    if (!foundCredentials) return null;

    const isPasswordValid = await bcrypt.compare(
        password,
        foundCredentials.password
    );

    if (isPasswordValid) {
        return foundCredentials.user; // Usuario correcto
    }

    return null;
}


export {
    createUserCredentialService,
    checkUserCredentialService
}