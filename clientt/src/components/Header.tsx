import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDispatch, useSelector } from 'react-redux';

import { setUser, clearUser } from './UserSlice';

interface UserState {
  email: string;
  userid: string;
  image: string;
  isLoggedin: boolean;
}
const Header = () => {
  // const goto = useNavigate();
  const { email, image, } = useSelector(
    (state: { user: UserState }) => state.user
  );
  const dispatch = useDispatch();

  
  useEffect(() => {
    const getuser = async() => {
      try{
         const response = await axios.get('http://localhost:6005/login', {
          withCredentials: true,
        });
        // console.log('ok');
    
        console.log(response.data.user[0]);
    
        const data = response.data.user[0];
    
        const userData = {
          email: data.email,
          userid: data.id,
          image: data.image,
          isLoggedin: true,
        };
    
        console.log(userData);
        dispatch(setUser(userData));
      } catch(err){
        console.log(err);  
      }
    }


    getuser();
  }, []);
  

  const handleLogout = () => {
    window.open("http://localhost:6005/logout", "_self");
    dispatch(clearUser());
    // goto('/');
  };
  
  console.log(image);
  

  return (
    <AppBar sx={{ background: ' rgb(197, 241, 241)' }} elevation={0}>
      <Toolbar sx={{ mx: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          component={Link}
          to={'/'}
          sx={{ textDecoration: 'none' }}
        >
          <MenuBookIcon fontSize="large" sx={{ color: 'black' }} />

          <Typography
            variant="h6"
            noWrap
            // component="a"
            sx={{
              mx: 2,
              fontWeight: 700,
              color: 'black',
            }}
          >
            Resume Builder
          </Typography>
        </Box>

        <Box>
          {!email ? (
            <Button
              component={Link}
              to="/login"
              sx={{ color: 'black', fontWeight: '700', fontSize: '18px' }}
            >
              Login
            </Button>
          ) : (
            <Box>
              <Button
                // component={Link} to={"/logout"}
                sx={{ color: 'black', fontWeight: '700', marginRight: '2rem' }}
                onClick={handleLogout}
              >
                Logout
              </Button>
              <IconButton
                sx={{ p: 0 }}
              >
                {/* {image} */}
                <Avatar src={image} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
