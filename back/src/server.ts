import express from "express";
import routes from "./routes/index";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// Servir archivos estáticos del frontend en producción
if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "../../front/dist")));
}

// En producción usar /api como prefijo, en desarrollo usar rutas directas
if (process.env.NODE_ENV === "production") {
  server.use("/api", routes);
} else {
  server.use(routes);
}

// En producción, servir index.html para cualquier ruta no API
if (process.env.NODE_ENV === "production") {
  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../front/dist/index.html"));
  });
}

export default server;
