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
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
//  import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
//  import { format } from 'date-fns';
//  import { isDate } from 'date-fns'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import AdapterDayjs from '@mui/lab/AdapterDayjs';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

import Dayjs from 'dayjs';

interface UserState {
  email: string;
  userid: string;
  image: string;
  isLoggedin: boolean;
}
const FormDashboard: React.FC = () => {
  // const userid=4;
  const { userid } = useSelector((state: { user: UserState }) => state.user);
  // console.log(userid, 'userId');

  let goto = useNavigate();

  const [userData, setUserData] = useState<{
    name: string;
    designation: string;
    email: string;
    gitHub: string;
    phoneNumber: string;
    address: string;
    pinCode: string;
    dateOfBirth: string | null; // Explicitly define type as Date | null
    gender: string;
    nationality: string;
    hobbies: string;
    language: string;
    objective: string;
    course: string;
    collegeName: string;
    universityName: string;
    yearOfStarting: string;
    yearOfPassing: string;
    grade: string;
    skill1: string;
    description1: string;
    skill2: string;
    description2: string;
    title: string;
    description: string;
  }>({
    name: '',
    designation: '',
    email: '',
    gitHub: '',
    phoneNumber: '',
    address: '',
    pinCode: '',
    dateOfBirth: null,
    gender: '',
    nationality: '',
    hobbies: '',
    language: '',
    objective: '',
    course: '',
    collegeName: '',
    universityName: '',
    yearOfStarting: '',
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

  const handleDatePickerChange = (value: string | null) => {
    const formattedDate = value ? Dayjs(value).format('YYYY-MM-DD') : null;

    setUserData((prevState) => ({
      ...prevState,
      dateOfBirth: formattedDate,
    }));
  };

  console.log(userData);
  console.log("useeeerrrr id", userid);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:6005/users/${userid}/preview`,
        JSON.stringify(userData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    goto('/resumepreview');
  };

  const accordStyle = {
    marginBottom: '10px',
    borderRadius: '0px !important',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.24)',
  };
  return (
    <Box marginTop={'100px'} marginX={10}>
      <form onSubmit={handleSubmit}>
        <Accordion defaultExpanded sx={accordStyle}>
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
              <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="name"
                    variant="outlined"
                    name="name"
                    value={userData.name}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Job Designation"
                    variant="outlined"
                    name="designation"
                    value={userData.designation}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="email"
                    label="Email id"
                    variant="outlined"
                    name="email"
                    value={userData.email}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="GitHub id"
                    variant="outlined"
                    name="gitHub"
                    value={userData.gitHub}
                    onChange={handleSubmitChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    type="number"
                    label="Phone Number"
                    variant="outlined"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={userData.address}
                    onChange={handleSubmitChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    type="number"
                    label="Pin Code"
                    variant="outlined"
                    name="pinCode"
                    value={userData.pinCode}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  
                      <DatePicker
                        label="Date of Birth"
                        name="dateOfBirth"
                        value={userData.dateOfBirth}
                        onChange={handleDatePickerChange}
                      />
                   
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Gender"
                    variant="outlined"
                    name="gender"
                    value={userData.gender}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Nationality"
                    variant="outlined"
                    name="nationality"
                    value={userData.nationality}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Hobbies"
                    variant="outlined"
                    name="hobbies"
                    value={userData.hobbies}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="language"
                    variant="outlined"
                    name="language"
                    value={userData.language}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="carrer objective"
                    variant="outlined"
                    name="objective"
                    multiline={true}
                    rows={3}
                    value={userData.objective}
                    onChange={handleSubmitChange}
                  />
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* //====================================================================== Education */}
        <Accordion sx={accordStyle}>
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
              <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Course"
                    variant="outlined"
                    name="course"
                    value={userData.course}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="College Name"
                    variant="outlined"
                    name="collegeName"
                    value={userData.collegeName}
                    onChange={handleSubmitChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="University Name"
                    variant="outlined"
                    name="universityName"
                    value={userData.universityName}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Grade"
                    variant="outlined"
                    name="grade"
                    value={userData.grade}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Year Of starting"
                    variant="outlined"
                    name="yearOfStarting"
                    value={userData.yearOfStarting}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Year Of Passing"
                    variant="outlined"
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
        <Accordion sx={accordStyle}>
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
                    variant="outlined"
                    name="title"
                    value={userData.title}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    type="text"
                    label="Project Description"
                    variant="outlined"
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
        <Accordion sx={accordStyle}>
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
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Skill 1"
                    variant="outlined"
                    name="skill1"
                    value={userData.skill1}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="description"
                    variant="outlined"
                    name="description1"
                    value={userData.description1}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="Skill 2"
                    variant="outlined"
                    name="skill2"
                    value={userData.skill2}
                    onChange={handleSubmitChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    label="description"
                    variant="outlined"
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
          <Button
            style={{ background: 'rgb(197, 241, 241)', color: '#000000' }}
            type="submit"
          >
            Preview
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormDashboard;
