import React from 'react'
import Dashboard1 from '../Dashboard/Dashboard1'
import courses from '../../Data/data'
import './Coursespage.css'
import { Link, useNavigate } from 'react-router-dom'
const Coursespage = ({data}) => {
  return (
    <div className='container'>
      <Dashboard1 />
      <div className='box'>
        {data.map((course) =>
      <div key={course.id} className='courses'>
          <Link to = {`/course/${course.id}`}>
           <h2>{course.name}</h2>
          </Link>
        </div>
        )}
      </div>
    </div>
  )
}

export default Coursespage

