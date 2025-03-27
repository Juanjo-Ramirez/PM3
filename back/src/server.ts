import express from 'express';
import routes from "./routes/index";
import morgan from 'morgan';
import cors from 'cors';

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors())
server.use(routes)

export default server;