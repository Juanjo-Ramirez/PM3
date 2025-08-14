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

- Node.js (v18 o superior)
- PostgreSQL
- npm o yarn

### Desarrollo Local

#### Instalación de dependencias

```bash
npm run install-all
```

#### Configuración de variables de entorno

**Backend (`/back/.env`):**

```bash
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_password
DATABASE=tu_database_name
```

**Frontend (`/front/.env`):**

```bash
VITE_API_URL=http://localhost:3001
```

#### Ejecutar en desarrollo

```bash
# Ambos servicios simultáneamente
npm run dev

# O por separado:
npm run dev:back    # Backend en puerto 3001
npm run dev:front   # Frontend en puerto 5173 (Vite)
```

### Deployment en Render

#### Opción 1: Monorepo (Frontend + Backend en un solo servicio) - RECOMENDADO

**Configuración del Web Service en Render:**

1. **Build Command:**

```bash
npm run render-build
```

2. **Start Command:**

```bash
npm run render-start
```

3. **Variables de entorno necesarias:**
   - `NODE_ENV=production`
   - `PORT=10000` (o el puerto que asigne Render)
   - `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DATABASE`
   - **NO necesitas VITE_API_URL** (usará `/api` automáticamente)

**¿Cómo funciona?**

- El build compila el frontend a archivos estáticos en `/front/dist`
- El backend los sirve desde Express en producción
- Las rutas API están en `/api/*` y el frontend en todas las demás rutas

#### Opción 2: Deployment Separado

**Backend (Web Service):**

- Build Command: `cd back && npm install && npm run build`
- Start Command: `cd back && npm start`
- Variables de entorno: Las mismas del backend

**Frontend (Static Site):**

- Build Command: `cd front && npm install && npm run build`
- Publish Directory: `front/dist`
- Variable de entorno: `VITE_API_URL=https://tu-backend.onrender.com`

#### Solución de Problemas Comunes

1. **Error de CORS:** El backend ya está configurado con CORS habilitado
2. **Error 404 en rutas:** El servidor maneja SPA routing automáticamente
3. **Error de conexión API:** Verifica que las variables de entorno estén correctas
4. **Puerto incorrecto:** El frontend usa automáticamente el puerto correcto según el entorno

#### Opción 2: Deployment Separado (Recomendado para producción)

**Backend (Web Service):**

- Build Command: `cd back && npm install && npm run build`
- Start Command: `cd back && npm start`

**Frontend (Static Site):**

- Build Command: `cd front && npm install && npm run build`
- Publish Directory: `front/dist`
- Variable de entorno: `VITE_API_URL=https://tu-backend.onrender.com/api`

#### Configuración de URLs

Para facilitar el deployment, se recomienda:

1. **Crear archivo `.env` en `/front`:**

```bash
# Para desarrollo local
VITE_API_URL=http://localhost:3000

# Para producción separada
# VITE_API_URL=https://tu-backend.onrender.com/api
```

2. **Actualizar imports en el frontend para usar la configuración:**

```javascript
import API_BASE_URL from "../config/api.js";
// Usar API_BASE_URL en lugar de URLs hardcodeadas
```

## Estados de Turnos

La aplicación maneja diferentes estados para los turnos médicos a través del enum `StatusAppointment`:

- **ACTIVE**: Turno activo y confirmado
- **CANCELLED**: Turno cancelado por el usuario

## Contribución

Este proyecto forma parte del módulo PM3 y está diseñado para demostrar competencias en desarrollo full-stack con tecnologías modernas.
