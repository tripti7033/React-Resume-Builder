const express = require('express');
import { Request, Response } from "express";
import { AppDataSouece } from "../dataSource";
import { PersonalDetails } from "../entity/personal_details";
import { EducationDetails } from "../entity/education_details";
import { Skills } from "../entity/skills";
import { Project } from "../entity/projects";
import { User } from "../entity/user";

export const postFormData = async (req: Request, res: Response) => {
    const id = req.params.userid;
    console.log("server id", id);
    
    try{
    const {
        name,
        designation,
        email,
        gitHub,
        phoneNumber,
        address,
        pinCode,
        dateOfBirth,
        gender,
        nationality,
        hobbies,
        language,
        objective,
        course,
        collegeName,
        universityName,
        grade,
        yearOfPassing,
        yearOfStarting,
        skill1,
        description1,
        skill2,
        description2,
        title,
        description

    } = req.body

    console.log(id);
    

    const userRepo = AppDataSouece.getRepository(User)
    const user = await userRepo.findOne({where: {id: parseInt(id)}});
    if(!user) {
        return res.json({
            mag: "client not found"
        })
    }
    console.log(user);
    
    const personalRepo = AppDataSouece.getRepository(PersonalDetails);
    const personalData = personalRepo.create({
        name: name,
        designation: designation,
        email: email,
        gitHub: gitHub,
        phoneNumber: phoneNumber,
        address: address,
        pincode: pinCode,
        dateOfBirth: dateOfBirth,
        gender: gender,
        nationality: nationality,
        hobbies: hobbies,
        language: language,
        objective: objective,
        user: user,
       
    })
    await personalRepo.save(personalData);

    const educationRepo = AppDataSouece.getRepository(EducationDetails);
    const educationData = educationRepo.create({
        course: course,
        collegeName: collegeName,
        univerSityName: universityName,
        grade: grade,
        yearOfPassing: yearOfPassing,
        yearOfStarting: yearOfStarting,
        user: user,
    })
    await educationRepo.save(educationData);

    const skillRepo = AppDataSouece.getRepository(Skills)
    const skillData = skillRepo.create({
        skill1: skill1,
        description1: description1,
        skill2: skill2,
        description2: description2,
        user: user,

    })
    await skillRepo.save(skillData);

    const projectRepo = AppDataSouece.getRepository(Project);
    const projectData = projectRepo.create({
        title: title,
        description: description,
        user: user,
    
    })

    await projectRepo.save(projectData)

    return res.json({
        personalData: personalData,
        educationData: educationData,
        skills: skillData,
        projectData: projectData,
// return res.json({user})
    })
}catch(err){
    console.log(err);
    return res.status(500).json({message: "Internal server error"})
    
}
}


export const getPostData = async (req: Request, res: Response) => {
    const id = req.params.userid;
    const formRepo = AppDataSouece.getRepository(User);
    const AllPersonalDetail = await formRepo.find({ relations: {
        person: true,
        educationDetails: true,
        projects: true,
        skills: true,
    },});
  console.log("res");
  
    return res.json(AllPersonalDetail);

}

// {
//     "name":"tripti",
//         "email": "tri@gmail.com",
//           "phone": "647",
//           "address": "hassanganj",
//           "pincode": "812005",
//           "dateOfBirth": "11/10/2000",
//           "gender":"female",
//           "nationality": "indian",
//           "hobbies": "painting",
//            "course": "Btech",
//           "collegeName": "collegeName",
//           "univerSityName": "univerSityName",
//           "grade": "8.39cgpa",
//           "yearOfPassing": "2022",
//            "skill1": "html, css, javascript",
//           "description1" : "frontend Development",
//           "skill2": "node",
//           "description2": "backend development",
//           "title": "smart home automation",
//           "description": "it is an electronics devices project ehich is used for the automate the home"
//   }