import React from 'react'
import './Dashboard.css'
import { Route , Routes} from "react-router-dom";
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Coursespage from '../Coursespage/Coursespage';
import Profile from '../Profilepage/profile';
import Login from '../Login/Login';
const Dashboard = () => {

    return (
        <div className='container'>
        <Dashboard1 />
        <Routes>
          <Route exact path="/dashbord2" element={<Dashboard2 />} />
          <Route exact path="/login" element={<Coursespage /> } />
          <Route exact path="/dash" element={<Profile />} />
          <Route exact path="/dashboard2" element={<Login />} />
        </Routes>
        </div>
    )}
export default Dashboard


