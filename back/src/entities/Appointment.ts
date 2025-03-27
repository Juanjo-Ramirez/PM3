import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusAppointment } from "../enums/StatusAppointment";
import { User } from "./User";



@Entity({name: "appointments"})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    date: Date;

    @Column({ type: "time" })
    time: string;

    @Column({})
    appointmentReason: string;

    @Column({
        type : "enum",
        enum : StatusAppointment,
        default : StatusAppointment.ACTIVE
    })
    status: StatusAppointment;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}