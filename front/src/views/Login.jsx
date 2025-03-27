import LoginForm from "../components/LoginForm";
import styles from "../styles/LoginPage.module.css";

function LoginPage() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
                <h1 className={styles.loginTitle}>Iniciar Sesión</h1>
                <p className={styles.loginDescription}>
                    Accede a tu cuenta para gestionar tus turnos médicos.
                </p>
                <LoginForm />
            </div>
        </div>
    );
}
export default LoginPage;
