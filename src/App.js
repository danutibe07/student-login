import { Route , Routes} from "react-router-dom";
import Coursepage from "./Components/Coursepage /Coursepage";
import Coursespage from "./Components/Coursespage/Coursespage";
import Dashboard2 from "./Components/Dashboard/Dashboard2";
import Landingpage from './Components/Landingpage/Landingpage';
import Login from "./Components/Login/Login";
import Profile from "./Components/Profilepage/profile";
import Signup from "./Components/Signup/Signup";
import courses from "./Data/data";

function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/land" element={<Landingpage />} /> 
           <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard2" element={<Dashboard2 />} />
          <Route exact path="/courses" element={<Coursespage data={courses}/>} />
          <Route exact path="/course/:id" element={<Coursepage data={courses}/>} />
          <Route exact path="/profile" element={<Profile />} /> 
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/register" element={<Signup />} />
      </Routes>
  </div>
  );
}
export default App;
