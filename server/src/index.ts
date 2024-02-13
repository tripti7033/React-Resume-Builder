require('dotenv').config();
import 'reflect-metadata'
import express, { Request, Response } from 'express';
import { AppDataSouece } from './dataSource';
import { User } from './entity/user';
const cors = require('cors');

const session = require('express-session');
import { SessionData }  from "express-session"
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



const personal_details = require('./routes/formData')



const app = express();

const port = 6005;
const GOOGLE_CLIENT_ID ="759037678250-3q5qbrjpljs2ct9jhbgt2p7gjvgrnrim.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

interface UserI{
  id: number,
  googleId: string,
  displayName: string,
  email: string,
  image: string
  
}
interface CustomRequest extends Request {
  user?: any;
}

interface MySessionData extends SessionData {
  google_oauth2_state?: string;
}

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client's origin
  credentials: true,
}));

app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).json({'server': 'server is start'});
});


app.use(session({
  secret:"1234567frthyjhgfdghjkl",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}))


app.use(passport.initialize());
app.use(passport.session());



app.use(personal_details)



// console.log("first");

passport.use(
    new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ['profile', 'email'],
    },  async (accessatoken: string, refreshToken: string, profile: any, done:any) => {
        console.log(profile);
        console.log(profile.emails[0].value);
        console.log("id", profile.id);
        
        
        try{
          const userRepo = AppDataSouece.getRepository(User);
          let user: UserI | null = await userRepo.findOne({where: {googleId: profile.id}})

          if(!user){
            user = userRepo.create({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : '',
            
            image: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : ''
           })
           await userRepo.save(user);
          }
            return done(null, user);
        }catch(err){
          return done(err, null)
              } 

    }
    )
)

passport.serializeUser((user: any, done:any)=>{
  console.log("user", user);
    done(null, user)
})
passport.deserializeUser((user: any, done:any)=>{
    done(null, user) //decode session token
})

app.get('/auth/google',
  passport.authenticate('google', {
     scope: ['profile', 'email'],
     prompt: 'select_account consent', 
    //  state: true,
    }
    ));

app.get('/auth/google/callback', 
  passport.authenticate('google', { 
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: 'http://localhost:3000/login',
   
}),
 );
 
 console.log('before login');
 
  app.get("/login", async (req: CustomRequest, res: Response)=>{
   if(req.user){
  
    console.log("dfghj",req.user);
    
    try {
      const userId = req.user.id;
      console.log("id", userId);
      
      const userRepo = AppDataSouece.getRepository(User);
      const userData = await userRepo.find({where: {id: userId}});

      if (userData) {
        console.log(userData);
        
        res.status(200).json({ message: "user login", user: userData });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
   else{
    res.status(400).json({message: "user unauthorized"})

   }
 })
 app.get('/logout', (req: Request, res: Response, next)=>{
  req.logout(function(err){
    if(err){
      return next(err)
    }
    res.redirect('http://localhost:3000');
    // req.session.destroy(() => {
    //   res.redirect('http://localhost:3000');
    // });
  })
 
  
} )



AppDataSouece.initialize()
  .then(() => {
    console.log("connection successful");

    app.listen(port, () => {
      console.log(`listening at port number ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
