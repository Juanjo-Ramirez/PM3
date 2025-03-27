
import { Request, Response } from "express";
import { createUserService, getUserByIdService, getAllUserService } from "../services/user.service";
import { checkUserCredentialService } from "../services/credentials.service";


const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, birthDate, nDni, username, password } = req.body;

        if (!name || !email || !birthDate || !nDni || !username || !password) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const newUser = await createUserService( name, email, birthDate, nDni, username, password );

        res.status(201).json({ success: true, message: "User created", data: newUser });
        return
    } catch (error) {
        const errorMessage: string = 
        error instanceof Error ? error?.message : "Hubo un error inesperado";
        res.status(400).json({ messaje: "Los datos son incorrectos.", error: errorMessage });
    }

}

const getUserController = async (req: Request, res: Response) => {
    const allUsers = await getAllUserService();
    res.status(200).json(allUsers);
}

const getUserByIDController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userById = await getUserByIdService(+id);
        if (userById) {
            res.status(200).json(userById)
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }
}

const loginUserController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const logged = await checkUserCredentialService({ username, password });
        console.log(logged);

        if (logged) {
            res.status(200).json({ login: true, message: "Login successful", userId: logged.id });
            return;
        } else {
            res.status(401).json({ login: false, message: "Invalid username or password" });
            return;
        }
    } catch (error) {
        res.status(500).json({ messaje: "Error en el servidor", error });
    }

}


export { createUserController, getUserController, getUserByIDController, loginUserController };