import { DataSource } from "typeorm";
import { User } from "./entity/user";
import { EducationDetails } from "./entity/education_details";
import { PersonalDetails } from "./entity/personal_details";
import { Skills } from "./entity/skills";
import { Project } from "./entity/projects";

export const AppDataSouece = new DataSource(
    {
        type:'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Tripti907@',
        database: 'resumedb',
        synchronize: true,
        logging: true,
        entities: [User, EducationDetails, PersonalDetails, Skills, Project]
    
    }
)