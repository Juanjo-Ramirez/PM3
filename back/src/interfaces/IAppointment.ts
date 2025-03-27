import { StatusAppointment } from "../enums/StatusAppointment";

interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: StatusAppointment;
}

export default IAppointment;