import { Column, Entity, IntegerType, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class PersonalDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column()
    email: string;

    @Column()
    gitHub: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @Column()
    pincode: number;

    @Column({type: 'date'})
    dateOfBirth: Date;

    @Column()
    gender: string;

    @Column()
    nationality: string;

    @Column()
    hobbies: string

    @Column()
    language: string

    @Column()
    objective: string
   
    @OneToOne(()=>User, user => user.person )
    
    user: User
   
}