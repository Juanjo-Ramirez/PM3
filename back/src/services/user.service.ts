import { createUserCredentialService } from "./credentials.service"
import { AppDataSource } from "../config/data-source"
import { User } from "../entities/User"
import bcrypt from "bcrypt"
// import { Credential } from "../entities/Credential"


const UserRepository = AppDataSource.getRepository(User)
// const CredentialRepository = AppDataSource.getRepository(Credential)

export const createUserService = async (
    name: string,
    email: string,
    birthDate: string,
    nDni: number,
    username: string,
    password: string
) => {
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    
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
        await queryRunner.manager.save(newUser);

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCredential = await createUserCredentialService({ username, password: hashedPassword });

        newUser.credentials = newCredential;
        await queryRunner.manager.save(newUser);

        await queryRunner.commitTransaction();
        return newUser;
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw Error(`Error al crear el usuario. ${error}`);
    } finally {
        await queryRunner.release();
    }
}

export const getAllUserService = async (): Promise<User[]> => {
    const AllUsers = await UserRepository.find()
    return AllUsers
}

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const foundUser = await UserRepository.findOne({
        where: { id },
        relations: ["appointments"]

    })
    return foundUser
}
