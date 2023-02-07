import React from "react";
import { Link, withRouter, useHistory, useNavigate } from "react-router-dom";
import iconLogin from "../images/power-off.png";
import iconProfile from "../images/account.png";
import iconHome from "../images/home.png";
import iconRegister from "../images/verified.png";

const Navbar = () => {
  let navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    navigate(`/`);
  };

  const loginRegLink = (
      <div className="nav-link">
        <Link to="/login">
          <img src={iconLogin} alt="login" />
        </Link>

        <Link to="/register" >
          <img src={iconRegister} alt="register" />
        </Link>
      </div>
  );

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
      <Link to="/">
        <img src={iconHome} alt="home" className="navHome"/>
      </Link>
      {localStorage.usertoken ? userLink : loginRegLink}
    </div>
  );
};

export default Navbar;
