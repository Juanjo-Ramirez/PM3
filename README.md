# PM3 - Sistema de Gestión de Turnos Médicos

## Descripción

PM3 es una aplicación web full-stack desarrollada para la gestión de turnos médicos. El sistema permite a los usuarios registrarse, iniciar sesión y gestionar sus citas médicas de manera eficiente. La aplicación está construida con una arquitectura moderna separando el frontend y backend, proporcionando una experiencia de usuario fluida y una API robusta.

### Funcionalidades Principales

- **Registro de Usuarios**: Los usuarios pueden crear una cuenta proporcionando información personal básica
- **Autenticación**: Sistema de login seguro con credenciales encriptadas
- **Gestión de Turnos**: Los usuarios pueden:
  - Solicitar nuevos turnos médicos
  - Ver sus turnos programados
  - Cancelar turnos existentes
- **Panel de Control**: Vista personalizada para cada usuario con sus turnos
- **Rutas Protegidas**: Acceso controlado a secciones que requieren autenticación

## Tecnologías Utilizadas

### Backend

- **Node.js** - Entorno de ejecución para JavaScript
- **TypeScript** - Superset de JavaScript con tipado estático
- **Express.js** - Framework web para Node.js
- **TypeORM** - ORM para TypeScript y JavaScript
- **PostgreSQL** - Base de datos relacional
- **bcrypt** - Librería para el hash de contraseñas
- **JWT** (implícito) - Para autenticación de usuarios
- **CORS** - Manejo de políticas de intercambio de recursos
- **Morgan** - Logger de peticiones HTTP
- **dotenv** - Gestión de variables de entorno

### Frontend

- **React** (v18.3.1) - Librería de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Axios** - Cliente HTTP para realizar peticiones al backend
- **Formik** - Librería para manejo de formularios
- **Yup** - Esquema de validación para JavaScript
- **CSS Modules** - Estilizado modular y encapsulado

### Herramientas de Desarrollo

- **ESLint** - Linter para JavaScript/TypeScript
- **Nodemon** - Monitor de archivos para desarrollo
- **ts-node** - Ejecución directa de archivos TypeScript

## Estructura del Proyecto

### Backend (`/back`)

```
src/
├── config/          # Configuración de base de datos y variables de entorno
├── controllers/     # Controladores de rutas HTTP
├── dto/            # Data Transfer Objects para validación
├── entities/       # Entidades de TypeORM (User, Appointment, Credential)
├── enums/          # Enumeraciones (StatusAppointment)
├── interfaces/     # Interfaces TypeScript
├── routes/         # Definición de rutas de la API
└── services/       # Lógica de negocio
```

### Frontend (`/front`)

```
src/
├── components/     # Componentes reutilizables de React
├── context/        # Context API para manejo de estado global
├── helpers/        # Funciones auxiliares y validaciones
├── hooks/          # Custom hooks de React
├── images/         # Recursos de imagen
├── styles/         # Archivos CSS y CSS Modules
└── views/          # Páginas principales de la aplicación
```

## Modelo de Datos

La aplicación maneja tres entidades principales:

- **User**: Información personal del usuario (nombre, email, fecha de nacimiento, DNI)
- **Credential**: Credenciales de acceso (usuario y contraseña encriptada)
- **Appointment**: Turnos médicos (fecha, hora, motivo, estado)

## Instalación y Configuración

### Prerrequisitos

- Node.js (v16 o superior)
- PostgreSQL
- npm o yarn

### Backend

```bash
cd back
npm install
# Configurar variables de entorno en .env
npm run build
npm start
```

### Frontend

```bash
cd front
npm install
npm run dev
```

## Estados de Turnos

La aplicación maneja diferentes estados para los turnos médicos a través del enum `StatusAppointment`:

- **ACTIVE**: Turno activo y confirmado
- **CANCELLED**: Turno cancelado por el usuario

## Contribución

Este proyecto forma parte del módulo PM3 y está diseñado para demostrar competencias en desarrollo full-stack con tecnologías modernas.
