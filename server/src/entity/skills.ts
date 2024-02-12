import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Skills {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill1: string;

    @Column()
    description1: string;

    @Column()
    skill2: string;

    @Column()
    description2: string;

    @ManyToOne(() => User, (user) => user.skills )
    user: User

}