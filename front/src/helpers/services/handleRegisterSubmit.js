import apiClient from "../apiClient.js";

const handleRegisterSubmit = async (values) => {
  try {
    const response = await apiClient.post("/users/register", {
      username: values.username,
      email: values.email,
      password: values.password,
      name: values.name,
      birthDate: values.birthDate,
      nDni: values.nDni,
    });
  } catch (error) {
    console.error(
      "Error al registrar el usuario",
      error.response?.data || error.message
    );
    return {
      status: error.response?.status || 500,
      data: error.response?.data || {
        message: "Error al conectar con el servidor.",
      },
    };
  }
};

export default handleRegisterSubmit;
