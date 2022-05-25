import React from 'react'
import { useParams } from 'react-router-dom'
import "./Coursepage.css"
import courses from "../../Data/data"
import { Link } from 'react-router-dom'
const Coursepage = ({data}) => {
  const { id } = useParams();
  const i = id - 1
  console.log(id)
  return (
    <div className='courseinfo'>
         <li><Link to="/courses">back</Link></li>
          <h1>Introduction to {courses[i].name}</h1>
          <p>{courses[i].details.intro}</p>
          <ul>{courses[i].details.branches.map((branch, index) =>
          <li  key={index}>{branch}</li>)}
          </ul>
    </div>     
  )
}

export default Coursepage