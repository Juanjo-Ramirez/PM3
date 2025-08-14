// Configuración de la API base URL
const getApiBaseUrl = () => {
  // Si hay una variable de entorno específica, úsala
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // En producción (cuando está servido desde el mismo dominio)
  if (import.meta.env.PROD) {
    return "/api";
  }

  // En desarrollo local
  return "http://localhost:3001";
};

const API_BASE_URL = getApiBaseUrl();

export default API_BASE_URL;
