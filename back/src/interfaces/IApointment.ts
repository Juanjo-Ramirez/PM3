import { StatusAppointment } from '../enums/StatusAppointment';

interface IApointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: StatusAppointment;
}

export default IApointment;