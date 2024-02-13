import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EducationDetails } from "./education_details";
import { PersonalDetails } from "./personal_details";
import { Skills } from "./skills";
import { Project } from "./projects";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    googleId: string

    @Column()
    displayName:string

    @Column()
    email: string

    @Column()
    image: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(()=>PersonalDetails, person => person.user)
    @JoinColumn()
    person: PersonalDetails

    @OneToMany(()=>EducationDetails, (educationDetail) => educationDetail.user)
    educationDetails: EducationDetails[]


    // @OneToOne(()=>PersonalDetails)
    // @JoinColumn()
    // personalDetail: PersonalDetails


    @OneToMany(()=>Skills, (skill) =>skill.user )
    skills: Skills[];

    @OneToMany(() =>Project, (project) => project.user)
    projects: Project[]
}