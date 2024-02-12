import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dashboard } from '@mui/icons-material';


interface UserState {
  email: string;
  userid: string;
  image: string;
  isLoggedin: boolean;
}
const FormDashboard: React.FC = () => {
  // const userid=4;
  const {userid} = useSelector((state: {user: UserState} ) => state.user)
  let goto = useNavigate()
  const [userData, setUserData] = useState({
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
  const handleSubmitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(userData)
  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const response = await axios.post(`http://localhost:6005/users/${userid}/preview`,
      JSON.stringify(userData),
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      )
      console.log(response.data);

    }catch(err){
      console.log(err);
      
    }
    goto('/resumepreview')
  };

  return (
    <>
      <Box marginTop={4} marginX={10}>
        <form onSubmit={handleSubmit}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h1" fontSize={20}>
                Personal Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '30rem' },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} rowSpacing={2}>
                    <TextField
                      type="text"
                      label="name"
                      variant="filled"
                      name="name"
                      value={userData.name}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} rowSpacing={2}>
                    <TextField
                      type="email"
                      label="Email id"
                      variant="filled"
                      name="email"
                      value={userData.email}
                      onChange={handleSubmitChange}
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <TextField
                      type="number"
                      label="Phone Number"
                      variant="filled"
                      name="phoneNumber"
                      value={userData.phoneNumber}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Address"
                      variant="filled"
                      name="address"
                      value={userData.address}
                      onChange={handleSubmitChange}
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <TextField
                      type="number"
                      label="Pin Code"
                      variant="filled"
                      name="pinCode"
                      value={userData.pinCode}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="date"
                      label="Date of Birth"
                      variant="filled"
                      name="dateOfBirth"
                      placeholder=""
                      value={userData.dateOfBirth}
                      onChange={handleSubmitChange}
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Gender"
                      variant="filled"
                      name="gender"
                      value={userData.gender}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Nationality"
                      variant="filled"
                      name="nationality"
                      value={userData.nationality}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Hobbies"
                      variant="filled"
                      name="hobbies"
                      value={userData.hobbies}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
          {/* //====================================================================== Education */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h1" fontSize={20}>
                Education Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '30rem' },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6} rowSpacing={2}>
                    <TextField
                      type="text"
                      label="Course"
                      variant="filled"
                      name="course"
                      value={userData.course}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} rowSpacing={2}>
                    <TextField
                      type="text"
                      label="College Name"
                      variant="filled"
                      name="collegeName"
                      value={userData.collegeName}
                      onChange={handleSubmitChange}
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="University Name"
                      variant="filled"
                      name="universityName"
                      value={userData.universityName}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Grade"
                      variant="filled"
                      name="grade"
                      value={userData.grade}
                      onChange={handleSubmitChange}
                    />
                  </Grid>

                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Year Of Passing"
                      variant="filled"
                      name="yearOfPassing"
                      value={userData.yearOfPassing}
                      
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
          {/* //============================================   Project Detail  */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h1" fontSize={20}>
                Project Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '60rem' },
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type="text"
                      label="Project Title"
                      variant="filled"
                      name="title"
                      value={userData.title}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      type="text"
                      label="Project Description"
                      variant="filled"
                      multiline={true}
                      rows={4}
                      name="description"
                      value={userData.description}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
            {/* <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions> */}
          </Accordion>

          {/* //===================================      skill                 */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h1" fontSize={20}>
                Skills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 2, width: '30rem' } }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Skill 1"
                      variant="filled"
                      name="skill1"
                      value={userData.skill1}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="description"
                      variant="filled"
                      name="description1"
                      value={userData.description1}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="Skill 2"
                      variant="filled"
                      name="skill2"
                      value={userData.skill2}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      type="text"
                      label="description"
                      variant="filled"
                      name="description2"
                      value={userData.description2}
                      onChange={handleSubmitChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Box display={'flex'} justifyContent="center" margin={2}>
            <Button variant="contained" color="secondary" type="submit">
              Preview
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default FormDashboard;
