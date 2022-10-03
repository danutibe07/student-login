import React from 'react'
import Dashboard1 from './Dashboard1'
import './Dashboard.css'
import logo3 from "../../images/img3.svg"
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
function Dashboard2() {
  const [user, loading, error] = useAuthState(auth);
  const [uname, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);

    }
  };
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);
  return (
    <>
    {user?.email ? 
    <div className='container'>
      <Dashboard1 />
      <div>
        <div className='deat2'>
          <h2>Welcome<div>{user?.email.substr(0,user?.email.indexOf('@'))}</div></h2>
        </div>
      
        <div className='deat'>
        <img src={logo3} alt ="images" width="500px" height="500px"/>
        </div>
      </div>
    </div> : "You are not logged in"
    }
    </>
  )
}
export default Dashboard2