import { DataSource } from "typeorm"
import { DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    logger: "debug",
    dropSchema: true,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})


export const initializeAppDataSource = async () => {
    try {
        const connection = await AppDataSource.initialize()
        console.log(`Connected to database ${connection.options.database}`)
    } 
    catch (e) {
        console.log(`Error connecting to database ${e}`)
    }
    
}