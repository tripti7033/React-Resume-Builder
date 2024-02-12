import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Divider, FormControl, FormLabel, TextField } from "@mui/material";
import styled from "@emotion/styled";
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleLogin } from '@react-oauth/google';
// import {jwtDecode}  from "jwt-decode";
const  {jwtDecode} = require('jwt-decode')

// interface for Userstate
interface UserState {
  email: string;
  userid: string;
  image: string;
  isLoggedin: boolean;
}

const Login = () => {
  const { email, userid, image, isLoggedin } = useSelector((state: {user: UserState}) => state.user);
  const dispatch = useDispatch();
  // const [isA , setisA] = useState(false)
  const loginWithGoogle = async () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
   

  };
  const CustomFormControl=styled(FormControl)({
    width:"100%",
    // marginBottom:"10px",

    "& input":{
      padding:"5px !important"

    }

  })
  const CustomButton=styled(Button)({
    border:"1px solid",
    width:"100%"

  })

  const handleClick = (credentialResponseDecode: any) => {
   const {name, email, picture} = credentialResponseDecode
   console.log(name, email, picture);

   
  }
  
  return (
   
    
    <Box className="login_container_form"  >
      <form  className="login_container" >
        
      <CustomFormControl >
        <FormLabel>Email</FormLabel>
        <TextField type="email"  />
      </CustomFormControl>
      <CustomFormControl>
        <FormLabel>Passowrd</FormLabel>
        <TextField type="password" />
      </CustomFormControl>
       
        <CustomButton type="submit">Login</CustomButton>
       <Divider>Or</Divider>
       <CustomButton onClick={loginWithGoogle} startIcon={<GoogleIcon/>}>Sign in with Google</CustomButton>
      </form>


{/* //============================ */}

<GoogleLogin
  onSuccess={(credentialResponse) => {
    let credentialResponseDecode =  jwtDecode(credentialResponse?.credential)
    console.log(credentialResponseDecode);
    handleClick(credentialResponseDecode)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>


    </Box>
  
  );
};

export default Login;
