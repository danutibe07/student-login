import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import "./Profile.css"
import { Link } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
function Profile() {
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
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
      <li><Link to="/dashboard2">back</Link></li>
      <div className="dashboard__container">
        <h3>You are Logged in as</h3>
        <h2> Name: {user?.email.substr(0,user?.email.indexOf('@'))}</h2>
        <h2>Email: {user?.email}</h2>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Profile;