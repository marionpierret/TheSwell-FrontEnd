import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import MemberPage from "./components/MemberPage";
import Survey from "./components/Survey";
import jwt_decode from "jwt-decode";
import EditUsers from "./components/EditUsers";
import SurveysHistory from "./components/SurveysHistory";

const TheSwellRouter = () => {
  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {decoded && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/spot/:id" element={<MemberPage />} />
            <Route path="/survey/spot/:id" element={<Survey />} />
            <Route path="/surveys/:id" element={<SurveysHistory/>} />
            <Route path="/edit/:id" element={<EditUsers />} />
          </>
        )}
        {/* <Route path="/opinion" element={<Opinion />}/>
                <Route path="/comments" element={<Comments />}/> */}
        <Route path="*" element={<h1>404 ERROR</h1>} />
      </Routes>
    </div>
  );
};

export default TheSwellRouter;
