import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./User";


@Entity({name: "credentials"})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @OneToOne(() => User, (user) => user.credentials)
    user: User;
}