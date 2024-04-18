require('dotenv').config();
import 'reflect-metadata'
import express, { Request, Response } from 'express';
import { AppDataSouece } from './dataSource';
import { User } from './entity/user';
// import path from 'path';
const cors = require('cors');

// const buildPath = path.join(__dirname, "../../clientt/build")

const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



const personal_details = require('./routes/formData')
const login_details = require('./routes/login')


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

// app.use(express.static(buildPath))
// app.get('/*', function(req, res){
//   res.sendFile(
//     path.join(__dirname, "../../clientt/build/index.html"),
//     function (err){
//       if(err){
//         res.status(500).send(err);
//       }
//     }
//   )
// })

app.use(cors({
  origin: 'http://localhost:3000',
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

passport.use(
    new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ['profile', 'email'],
    },  async (accessatoken: string, refreshToken: string, profile: any, done:any) => {
        // console.log(profile);
        // console.log(profile.emails[0].value);
        // console.log("id", profile.id);
        
        
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
    }
    ));

app.get('/auth/google/callback', 
  passport.authenticate('google', { 
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: 'http://localhost:3000/login',
   
}),
 );
 
//  console.log('before login');
 
app.use(login_details)

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
