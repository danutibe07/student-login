import React from 'react'
import './Landingpage.css'
import logo from '../../images/img1.svg'
import { Link } from 'react-router-dom'
const Landingpage = () => {
    return (
        <div className='landingcontainer'>
             <nav className='navi'>
                <h1>Kodecamp</h1>
                <Link to="/login" className='right'>Sign in</Link>
            </nav>
            <div className='leftdiv'>
                <div className='text'> <span className='learn'>Learn</span> on your class <span className='schedule'>schedule</span></div>
            </div>
            <div className='rightdiv'>
                <img src={logo} alt ="images" width="350px" height="350px"/>
            </div>
        </div>
    )}

export default Landingpage