import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);
    
    useEffect(() => {
        const storedUserId = sessionStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (id) => {
        setIsAuthenticated(true);
        setUserId(id);
        sessionStorage.setItem('userId', id);
    };

    const logout = () => {        
        setIsAuthenticated(false);
        setUserId(null);
        sessionStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userId }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext