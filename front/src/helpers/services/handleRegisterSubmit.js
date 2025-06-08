import axios from "axios";

const handleRegisterSubmit = async (values) => {
    try {
        const response = await axios.post("https://pm3-turnos.onrender.com/users/register", {
            username: values.username,
            email: values.email,
            password: values.password,
            name: values.name,
            birthDate: values.birthDate,
            nDni: values.nDni,
        });

        console.log(response.data);
        return { status: response.status, data: response.data };
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
