import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class PersonalDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: number;

    @Column()
    address: string;

    @Column()
    pincode: number;

    @Column()
    dateOfBirth: Date;

    @Column()
    gender: string;

    @Column()
    nationality: string;

    @Column()
    hobbies: string
   
    @OneToOne(()=>User)
    @JoinColumn()
    user: User
   
}