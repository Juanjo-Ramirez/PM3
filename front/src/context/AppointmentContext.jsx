import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiClient from "../helpers/apiClient.js";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const { isAuthenticated, userId } = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
        apiClient.get(`/users/${userId}`)
            .then((response) => {
                setAppointments(response.data.appointments);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [isAuthenticated, userId]);

    const createAppointment = async (newAppointmentData) => {
        try {
            const response = await apiClient.post(`/appointments/schedule`, {
                ...newAppointmentData,
                userId: userId
            });
            const savedAppointment = response.data.createAppointment;
            setAppointments(prev => [...prev, savedAppointment]);
        } catch (error) {
            console.error('Error al crear turno:', error);
            throw error;
        }
    };

    return (
        <AppointmentContext.Provider value={{ appointments, setAppointments, createAppointment }}>
            {children}
        </AppointmentContext.Provider>
    );
};

AppointmentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppointmentContext