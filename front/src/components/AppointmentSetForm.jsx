import { Formik, Form, Field, ErrorMessage } from "formik";
import { appointmentReasons, availableTimes } from "../helpers/AppointmentHelper";
import { useContext } from "react";
import AppointmentContext from "../context/AppointmentContext.jsx";
import * as Yup from "yup";
import style from "../styles/Forms.module.css";

const AppointmentSetForm = () => {
    const { createAppointment } = useContext(AppointmentContext);

    const validateDate = (date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 6 || dayOfWeek === 0 || selectedDate < today) {
            return false;
        }
        return true;
    };

    return (
        <>
            <div className={style.formHeader}>
                <h2 className={style.formSubtitle}>Registrar un turno</h2>
            </div>
            <div className={style.formContainerSetAppointment}>
                <Formik
                    initialValues={{
                        date: "",
                        time: "",
                        appointmentReason: "",
                    }}
                    validationSchema={Yup.object({
                        date: Yup.date()
                            .required("La fecha es obligatoria")
                            .test("day-check", "No se puede seleccionar Sábado o Domingo ni fechas anteriores a la actual", validateDate),
                        time: Yup.string().required("La hora es obligatoria"),
                        appointmentReason: Yup.string().required("El motivo del turno es obligatorio"),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        const userId = sessionStorage.getItem("userId");
                        const payload = { ...values, userId };
                        try {
                            await createAppointment(payload);
                            alert("Turno registrado");
                            resetForm();
                        } catch (error) {
                            alert("Error al registrar el turno", error);
                        }
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={style.formContainerSetAppointment}>
                            <div className={style.inputGroup}>
                                <label htmlFor="date">Fecha</label>
                                <Field type="date" name="date" className={style.inputField} />
                                <ErrorMessage name="date" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.inputGroup}>
                                <label htmlFor="time">Hora</label>
                                <Field as="select" name="time" className={style.inputField}>
                                    <option value="">Seleccionar hora</option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="time" component="div" className={style.errorMessage} />
                            </div>

                            <div className={style.inputGroup}>
                                <label htmlFor="appointmentReason">Motivo del turno</label>
                                <Field as="select" name="appointmentReason" className={style.inputField}>
                                    <option value="">Seleccionar motivo</option>
                                    {appointmentReasons.map((reason) => (
                                        <option key={reason} value={reason}>{reason}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="appointmentReason" component="div" className={style.errorMessage} />
                            </div>

                            <button type="submit" className={style.submitAppointmentBtn} disabled={isSubmitting}>
                                Solicitar Turno
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default AppointmentSetForm;