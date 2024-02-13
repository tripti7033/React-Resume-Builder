import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class EducationDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    course : string

    @Column()
    collegeName: string

    @Column()
    univerSityName: string

    @Column()
    grade: string

    @Column()
    yearOfPassing: string

    @Column()
    yearOfStarting: string

    @ManyToOne(() => User, (user) => user.educationDetails)
    user: User


}