import { NextFunction, Request, Response } from 'express';
import { AppDataSouece } from '../dataSource';
import { User } from '../entity/user';

interface CustomRequest extends Request {
  user?: any;
}
export const getLoginData = async (req: CustomRequest, res: Response) => {
    try {
  if (req.user) {
    // console.log("dfghj",req.user);

      const userId = req.user?.id;
      console.log('id', userId);

      const userRepo = AppDataSouece.getRepository(User);
      const userData = await userRepo.find({ where: { id: userId } });

      if (userData) {
        console.log(userData);

        res.status(200).json({ message: 'user login', user: userData });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    }
    // } else {
    //     res.status(400).json({ message: 'user unauthorized' });
    // }
} catch (error) {
  console.error('Error fetching user data:', error);
  res.status(500).json({ message: 'Internal Server Error' });
}
};

export const getLogout = (req: Request, res: Response, next: NextFunction) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('http://localhost:3000');
  });
};
