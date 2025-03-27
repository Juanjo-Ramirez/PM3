import style from "../styles/NavBar.module.css"
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <nav className={style.nav}>
            <Link to="/">Home</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/mis-turnos">Mis Turnos</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    )
}

export default NavBar