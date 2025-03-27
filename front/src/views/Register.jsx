import RegisterForm from "../components/RegisterForm";
import style from "../styles/Pages.module.css";

function RegisterPage() {
    return (
        <div className={style.pageContainer}>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;
