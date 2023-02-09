import React from "react";
import { Link, useNavigate } from "react-router-dom";
import iconLogin from "../images/power-off.png";
import iconProfile from "../images/account.png";
import iconHome from "../images/home.png";
import iconRegister from "../images/verified.png";
import "../css/Home.css";

const Navbar = () => {
  let navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    navigate(`/`);
  };

  // When not registered, icon of login and register are displayed
  const loginRegLink = (
    <div className="nav-link">
      <Link to="/login">
        <img src={iconLogin} alt="login" />
      </Link>

      <Link to="/register">
        <img src={iconRegister} alt="register" />
      </Link>
    </div>
  );

  // Once registered, the icon of profile and log out are displayed
  const userLink = (
    <div className="nav-link">
      <Link to="/profile">
        <img src={iconProfile} alt="my-profile"></img>
      </Link>

      <a href="" onClick={logOut}>
        <img src={iconLogin} alt="logout" />
      </a>
    </div>
  );

  return (
    <div className="navbar">
      {/* Always display a link to the home page */}
      <Link to="/">
        <img src={iconHome} alt="home" className="navHome" />
      </Link>
      {/* if token exist, display userLink, else display loginRegLink */}
      {localStorage.usertoken ? userLink : loginRegLink}
    </div>
  );
};

export default Navbar;
