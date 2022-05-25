import React from 'react'
import Dashboard1 from './Dashboard1'
import './Dashboard.css'
import logo3 from "../../images/img3.svg"
function Dashboard2() {
  return (
    <div className='container'>
      <Dashboard1 />
      <div>
        <div className='deat2'>
          <h2>Welcome Daniel</h2>
        </div>
      
        <div className='deat'>
        <img src={logo3} alt ="images" width="500px" height="500px"/>
        </div>
      </div>
    </div>
  )
}
export default Dashboard2