import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

interface UserState {
  email: string;
  userid: string;
  image: string;
  isLoggedin: boolean;
}
const Home = () => {
  const { email, userid, image, isLoggedin } = useSelector(
    (state: { user: UserState }) => state.user
  );
  return (
    <Box
      sx={{
        height: '90vh',
        background: ' rgb(250, 234, 214)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      <Box>
        <Typography variant="h1" fontFamily={'-moz-initial'}>
          Create a professional resume
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Fill in the blanks, choose a template, and download your resume
          instantly
        </Typography>
      </Box>
      <Box>
        {!email ? (
          <Button variant="contained" component={Link} to="/login">
            Create resume
          </Button>
        ) : (
          <Button variant="contained" component={Link} to="/dashboard">
            Create resume
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Home;
