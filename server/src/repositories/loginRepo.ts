import { Request, Response } from 'express'
import { AppDataSouece } from '../dataSource'
import { User } from '../entity/user';

export const postLoginData = async (req: Request, res: Response) =>{
    const { name, email, image} = req.body

    const userRepo = AppDataSouece.getRepository(User);
    const userData = await userRepo.find();

}