import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
function Dashboard1() {
return (
    <div className='dashboardcontainer'>
    <h1 className='heads'>Kodecamp</h1>
    <div className="contents">
      <ul>
        <li><Link to="/dashboard2">Dashboard</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/profile">Log out</Link></li>
      </ul>
    </div>
</div>
  )
}
export default Dashboard1