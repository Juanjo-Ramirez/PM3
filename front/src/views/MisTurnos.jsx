import { useContext } from "react";
import AppointmentContext from "../context/AppointmentContext.jsx";
import Turno from "../components/Turno";
import AppointmentSetForm from "../components/AppointmentSetForm";
import styles from "../styles/Pages.module.css";

const MisTurnos = () => {
    const { appointments } = useContext(AppointmentContext);   

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Mis Turnos</h1>
            <AppointmentSetForm />

            <div className={styles.appointmentList}>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <Turno key={appointment.id} {...appointment} />
                    ))
                ) : (
                    <p className={styles.noAppointments}>No tienes turnos agendados.</p>
                )}
            </div>
        </div>
    );
};

export default MisTurnos;
