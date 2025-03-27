import style from "../styles/Forms.module.css";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });
      if (response.status === 200) {
        login(response.data.userId);
        navigate("/mis-turnos");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.formTitle}>Bienvenido</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2 className={style.formSubtitle}>Iniciar Sesión</h2>

        <div className={style.inputGroup}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={style.inputField}
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.inputField}
            required
          />
        </div>

        <button type="submit" className={style.submitBtn}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;