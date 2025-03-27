import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"; // Importamos los estilos como módulo

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <h1 className={styles.homeTitle}>Bienvenido a Mediturnos</h1>
                <p className={styles.homeDescription}>
                    Gestiona fácilmente tus turnos médicos desde cualquier lugar.
                    Nuestra plataforma te permite reservar, cancelar y consultar tus turnos en pocos pasos.
                </p>
                <Link to="/register" className={styles.homeBtn}>Solicitar Turno</Link>
            </div>
        </div>
    );
}

export default Home;