
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import logo2 from "../../images/img2.svg"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user?.email) navigate("/dashboard2");
  }, [user, loading]);
  return (
    <div className="login">
      <div className='logleft'>
        <h1>Student Login</h1>
        <h4>make sure your account is secure</h4>
        <img src={logo2} alt ="images" width="350px" height="350px"/>
      </div>
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div className="reg">
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;














// import React from 'react'
// import { Link } from 'react-router-dom'
// import './login.css'
// import logo2 from "../../images/img2.svg"
// const Login = () => {
//   return (
//     <div className='logcontainer'>
//         <div className='logleft'>
//         <h1>Student Login</h1>
//         <h4>make sure your account is secure</h4>
//         <img src={logo2} alt ="images" width="350px" height="350px"/>
//         </div>
//         <div className='log'> 
//           <input className='inn' type="text" placeholder='Email address' /> <br></br>
//           <input className='inn' type="password" placeholder='Password' /> <br></br>
//            <div><Link to="/firebase" className='widd'>Login with Google</Link> </div><br></br>
//           <Link to="/dash" className='wid'>Login</Link>
//         </div>
//     </div>

//   )
// }

// export default Login