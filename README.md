# Resume Builder Project

This project is a Resume Builder application that allows users to create and customize their resumes. It provides a user-friendly interface for inputting personal and professional information and generates a formatted resume document based on the entered data.

## Features

- User registration and authentication
- Input forms for personal details, education, work experience, skills, etc.
- Dynamic preview of the resume as information is entered
- Ability to customize the layout and design of the resume
- Export functionality to generate the resume in various formats (e.g., PDF, Word)


## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript
- React.js
- Material-UI (for UI components)
- Google auth (for login)

### Backend

- Node.js
- Express.js
- Passport for authentication
- Typeorm

## Installation

1. Clone the repository:
   
   ```bash
   https://github.com/tripti7033/Resume-Builder
   ```
   
2. Install dependencies for frontend:

    ```bash
    cd Resume-Builder/clientt
    npm install
   ```

3. Install dependencies for backend:

    ```bash
    cd ../server
    npm install
    ```
    
4. Set up the database:
   
   ```bash
   - Install MongoDB if not already installed.
   - Create a new MongoDB database and configure the connection in `backend/config/database.js`.
  ```

5. Start the backend server:

   ```bash
     npm start
   ```

6. Start the frontend development server:
   
   ```bash
     cd ../clientt
     npm start
   ```
   
7. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Click on the "Create Resume" button on the homepage.
2. If it's the user's first time, they will be directed to the login page where they can log in using Google.
3. After successful login, the user will navigate to the dashboard page.
4. On the dashboard, the user can fill in details for their resume, including personal information, education, work experience, skills, etc.
5. Click on the "Preview" button to preview the resume before downloading.
6. After previewing, the user can download the resume as a PDF to their local machine.
7. To log out, the user can click on the logout button.


## Demo video

  checkout live Demo [here](https://drive.google.com/file/d/1voV5mGT-mThxanxkglmwDK9rzRrqgQ8N/view?usp=drive_link)

## Demo images
![Resume builder project screenshot](https://drive.google.com/file/d/1DpMB_pvG7h8hVDExYdvNnljSH7fyxlgn/view?usp=drive_link)



