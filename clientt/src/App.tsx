import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Error from './auth/error';
import Login from './auth/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Logout from './auth/Logout';
import Success from './components/Success';
import Resume from './components/Resume';



function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Navbar/>,
    errorElement: <Error/>,
    children: [
      // { path: '', element: <Login /> },
      { index: true, element: <Home/>},
      {path:'login', element: <Login/>},
      {path: "dashboard", element: <Success/>},
      // {path: "login/success", element: <Dashboard/>},

      // { path: "logout", element: <Logout/> },
      { path: "resumepreview", element: <Resume/>}
    ]
    }
])


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
