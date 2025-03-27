import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Si no está logueado, redirección al login
        return <Navigate to="/login" />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;