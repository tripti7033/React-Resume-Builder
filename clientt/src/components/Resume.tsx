import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useReactToPrint} from 'react-to-print'

interface UserState {
  email: string;
  userid: string;
  image: string;
  isLoggedin: boolean;
}
const Resume = () => {
  const { userid } = useSelector((state: { user: UserState }) => state.user);


  const [userData, setUserData] = useState({
    image: '',
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    pinCode: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    hobbies: '',
    course: '',
    collegeName: '',
    universityName: '',
    yearOfPassing: '',
    grade: '',
    skill1: '',
    description1: '',
    skill2: '',
    description2: '',
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `http://localhost:6005/users/${userid}/preview`
      );
      console.log(response.data[0]);
      const result = await response.data[0];
      setUserData((prevstate) => ({
        ...prevstate,
        image: result.image,
        name: result.person.name,
        email: result.person.email,
        phoneNumber: result.person.phoneNumber,
        address: result.person.address,
        pinCode: result.person.pincode,
        dateOfBirth: result.person.dateOfBirth,
        gender: result.person.gender,
        nationality: result.person.nationality,
        hobbies: result.person.hobbies,
        course: result.educationDetails[0].course,
        collegeName: result.educationDetails[0].collegeName,
        universityName: result.educationDetails[0].univerSityName,
        yearOfPassing: result.educationDetails[0].yearOfPassing,
        grade: result.educationDetails[0].grade,
        skill1: result.skills[0].skill1,
        description1: result.skills[0].description1,
        skill2: result.skills[0].skill2,
        description2: result.skills[0].description2,
        title: result.projects[0].title,
        description: result.projects[0].description,
      }));
    };
    fetchData();
  }, [userid]);
  // console.log(userData);


  const downloadRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => downloadRef.current
  })
  

  return (
    <Box display={'flex'}>
      <Box display={'flex'} justifyContent={'center'} ref = {downloadRef}>
        <Paper
          elevation={3}
          sx={{
            height: '900px',
            width: '90%',
            marginTop: '15px',
            marginLeft: '10px',
          }}
        >
          <Box
            height={120}
            display={'flex'}
            flexDirection={'column'}
            borderBottom={'1px solid rgba(0,0,0,0.5)'}
          >
            <Box display={'flex'} justifyContent={'space-around'}>
              <Box display={'flex'}>
                <IconButton>
                  <Avatar
                    sx={{
                      height: '100px',
                      width: ' 100px',
                    }}
                    alt={userData.name}
                    src={userData.image}
                  />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="h2" textAlign={'center'}>
                  {userData.name}
                </Typography>
                <Typography variant="h5" textAlign={'center'}>
                  Full Stack developer
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* <hr/> */}
          <Box
            // border={'1px solid green'}
            overflow="auto"
          >
            <Grid
              container
              spacing={5}
              sx={{
                padding: '10px',
                height: '100%',
              }}
            >
              <Grid
                item
                md={5}
                xs={6}

                //   sx={{ backgroundColor: "purple" }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingLeft: '20px',
                      fontWeight: '700',
                    }}
                  >
                    Contact
                  </Typography>
                  <Box paddingLeft={2} paddingTop={1}>
                    <Typography
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        paddingBottom: '2px',
                      }}
                    >
                      <PhoneIcon />
                      {userData.phoneNumber}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        paddingBottom: '3px',
                      }}
                    >
                      <MailOutlineIcon />
                      {userData.email}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        paddingBottom: '3px',
                      }}
                    >
                      <GitHubIcon />
                      GitHub
                      {/* {userData.github} */}
                    </Typography>
                    <Typography
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        paddingBottom: '3px',
                      }}
                    >
                      <HomeIcon />
                      {userData.address}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingTop: '30px',
                      paddingLeft: '20px',
                      fontWeight: '700',
                    }}
                  >
                    Skill
                  </Typography>
                  <Box paddingLeft={3} paddingTop={1}>
                    <Typography
                    //    sx={{paddingLeft: '13px' }}
                    >
                      {userData.skill1}{' '}
                    </Typography>
                    <Typography sx={{ paddingLeft: '20px' }}>
                      {userData.description1}
                    </Typography>
                  </Box>
                  <Box paddingLeft={3} paddingTop={1}>
                    <Typography
                    //    sx={{paddingLeft: '13px' }}
                    >
                      {userData.skill2}{' '}
                    </Typography>
                    <Typography sx={{ paddingLeft: '20px' }}>
                      {userData.description2}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingTop: '30px',
                      paddingLeft: '20px',
                      fontWeight: '700',
                    }}
                  >
                    Others
                  </Typography>
                  <Box paddingLeft={3} paddingTop={1}>
                    <Grid container>
                      <Grid item md={6}>
                        <Typography>Nationality : </Typography>
                        <Typography>Gender : </Typography>
                        <Typography>Date of Birth : </Typography>
                        <Typography>Hobbies : </Typography>
                        <Typography>Language : </Typography>
                      </Grid>
                      <Grid item  md={6}>
                        <Typography>{userData.nationality}</Typography>
                        <Typography> {userData.gender}</Typography>
                        <Typography> {userData.dateOfBirth}</Typography>
                        <Typography> {userData.hobbies}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingLeft: '30px',
                      fontWeight: '700',
                    }}
                  >
                    Objective
                  </Typography>
                  <Box
                    paddingTop={1}
                    sx={{
                      paddingLeft: '30px',
                    }}
                  >
                    <Typography>
                      A highly organized and hard-working individual looking for
                      a responsible position to gain practical experience.
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingTop: '30px',
                      paddingLeft: '30px',
                      fontWeight: '700',
                    }}
                  >
                    Education
                  </Typography>
                  <Box
                    paddingTop={1}
                    sx={{
                      paddingLeft: '30px',
                    }}
                  >
                    <Typography>cousre: {userData.course}</Typography>
                    <Typography>college: {userData.collegeName}</Typography>
                    <Typography>
                      university: {userData.universityName}
                    </Typography>
                    <Typography>grade: {userData.grade}</Typography>
                    <Typography>
                      yearOfPassing: {userData.yearOfPassing}
                    </Typography>
                  </Box>
                  <Box></Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingTop: '30px',
                      paddingLeft: '30px',
                      fontWeight: '700',
                    }}
                  >
                    Projects
                  </Typography>
                  <Box
                    paddingTop={1}
                    sx={{
                      paddingLeft: '30px',
                    }}
                  >
                    <Typography> {userData.title}</Typography>
                    <Typography sx={{ paddingLeft: '20px' }}>
                      {userData.description}
                    </Typography>
                  </Box>
                </Box>
                <Box paddingTop={1}>
                  <Typography
                    variant="h6"
                    borderBottom={'1px solid black'}
                    sx={{
                      paddingTop: '30px',
                      paddingLeft: '20px',
                      fontWeight: '700',
                    }}
                  >
                    Declaration
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '30px',
                    }}
                  >
                    <Typography>
                      {' '}
                      I hearby confirm that the information given above is true
                      to the best of my knowledge and belief.
                    </Typography>
                    <Box
                      p={1}
                      display={'flex'}
                      justifyContent={'space-between'}
                    >
                      <Typography>Name: {userData.name}</Typography>
                      <Typography>Place: {userData.address}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Box margin={2}>
        <Button onClick={handlePrint} variant="contained">Download</Button>
      </Box>
    </Box>
  );
};

export default Resume;
