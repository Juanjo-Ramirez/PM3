import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateRegisterForm } from "../helpers/validations";
import style from "../styles/Forms.module.css";
import handleRegisterSubmit from "../helpers/services/handleRegisterSubmit";

const RegisterForm = () => {
    return (
        <div className={style.formContainer}>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                    name: "",
                    birthDate: "",
                    nDni: "",
                }}
                validate={validateRegisterForm}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log("Submitting form", values);
                    const response = await handleRegisterSubmit(values);
                    console.log("Response from API", response);

                    if (response.status === 201) {
                        alert("Usuario registrado");
                        resetForm();
                    } else {
                        alert(`Error: ${response.data.error}`);
                    }
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={style.form}>
                        <h2 className={style.formSubtitle}>Registro</h2>

                        <div className={style.inputGroup}>
                            <label htmlFor="name">Nombre</label>
                            <Field type="text" name="name" className={style.inputField} />
                            <ErrorMessage name="name" component="div" className={style.errorMessage} />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className={style.inputField} />
                            <ErrorMessage name="email" component="div" className={style.errorMessage} />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="birthDate">Fecha de nacimiento</label>
                            <Field type="date" name="birthDate" className={style.inputField} />
                            <ErrorMessage name="birthDate" component="div" className={style.errorMessage} />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="nDni">DNI</label>
                            <Field type="number" name="nDni" className={style.inputField} />
                            <ErrorMessage name="nDni" component="div" className={style.errorMessage} />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="username">Usuario</label>
                            <Field type="text" name="username" className={style.inputField} />
                            <ErrorMessage name="username" component="div" className={style.errorMessage} />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="password">Contraseña</label>
                            <Field type="password" name="password" className={style.inputField} />
                            <ErrorMessage name="password" component="div" className={style.errorMessage} />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="repeatPassword">Repetir contraseña</label>
                            <Field type="password" name="repeatPassword" className={style.inputField} />
                            <ErrorMessage name="repeatPassword" component="div" className={style.errorMessage} />
                        </div>

                        <button type="submit" className={style.submitBtn} disabled={isSubmitting}>
                            Registrarse
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
