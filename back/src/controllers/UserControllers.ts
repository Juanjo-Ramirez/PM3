import { Request, Response } from 'express';


const getUsers = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que retorna todos los usuarios'});
    // const users = await UserService.getAllUsers();
    // res.json(users);
};

const getUserById = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que retorna un usuario por id'});
    // const user = await UserService.getUserById(req.params.id);
    // res.json(user);
};

const createUser = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que crea un usuario'});
    // const user = await UserService.createUser(req.body);
    // res.json(user);
};

const loginUser = async (req: Request, res: Response) => {
    res.status(200).json({messaje: 'Ruta que loguea un usuario'});
    // const user = await UserService.loginUser(req.body);
    // res.json(user);
};

export{
    getUsers,
    getUserById,
    createUser,
    loginUser
};