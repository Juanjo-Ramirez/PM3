import axios from "axios";
import PropTypes from 'prop-types';
import { useContext } from "react";
import AppointmentContext from "../context/AppointmentContext.jsx";
import style from "../styles/Pages.module.css";


const Turno = ({ id, date, time, status, appointmentReason}) => {
    const { setAppointments } = useContext(AppointmentContext);
    
    const handleCancel = () => {
        try {
            axios.put(`https://pm3-turnos.onrender.com/appointments/cancel/${ id }`);
            setAppointments((prev) =>
                prev.map((turno) => turno.id === id ? { ...turno, status: "cancelled" } : turno
                )
            );
            alert("Turno cancelado");
        } catch (error) {
            console.error("Error al cancelar el turno", error);
            alert("Error al cancelar el turno");
        }
    }
    
    return (
        <div className={style.turno}>
            <h2>{appointmentReason}</h2>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h4>{status}</h4>
            <button onClick={handleCancel}>Cancelar turno</button>
        </div>
    );
};

export default Turno;

Turno.propTypes = {
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    appointmentReason: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired}