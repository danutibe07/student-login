import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { set } from "firebase/database";
import { ref } from "firebase/database";

import {
  auth,
  dbs,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import "./signup.css";
function Signup() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(dbs, "users/" + userCredential.user.uid), {
            name: setName,
            email: email,
          });
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  };
  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={handleSubmit}>
          Register
        </button>
        <div className="reg">
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Signup;