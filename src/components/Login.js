import React, { useState } from "react";
import { login } from "../logic/UserFunctions";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  // Create states to store the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  // Check if the email and password inputed exist in the the database
  const testLogin = (e) => {
    // Don't submitt the form before clicking on the button
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    login(user).then((res) => {
      if (res) {
        navigate("/profile");
      } else {
        alert('invalid password or email, please try again')
      }
    });
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form noValidate onSubmit={testLogin}> {/* Disable the native validation of our browser */}
        <div className="user-box">
          <input
            type="email"
            name=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email address</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="submitBtn">
          <button type="submit" className="loginBtn">
            <span>Submit</span>
            <div className="top"></div>
            <div className="left"></div>
            <div className="bottom"></div>
            <div className="right"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
