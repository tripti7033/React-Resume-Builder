import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Error from './auth/error';
import Login from './auth/Login';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import FormDashboard from './components/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'dashboard', element: <FormDashboard /> },
        // { path: "logout", element: <Logout/> },
        { path: 'resumepreview', element: <Resume /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
