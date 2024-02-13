import { Box, Button, Divider, FormControl, FormLabel, TextField } from "@mui/material";
import styled from "@emotion/styled";
import GoogleIcon from '@mui/icons-material/Google';
// import { GoogleLogin } from '@react-oauth/google';
// import {jwtDecode}  from "jwt-decode";
// const  {jwtDecode} = require('jwt-decode')

// interface for Userstate

const Login = () => {

  const loginWithGoogle = async () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };



  const CustomFormControl=styled(FormControl)({
    width:"100%",
   
    "& input":{
      padding:"5px !important"

    }

  })
  const CustomButton=styled(Button)({
    border:"1px solid",
    width:"100%"

  })
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
{/* 
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
 */}

    </Box>
  
  );
};

export default Login;
