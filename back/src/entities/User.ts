import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column({type: "date"})
    birthDate: Date;

    @Column({unique: true})
    nDni: number;

    @OneToOne(() => Credential, (credential) => credential.user)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}