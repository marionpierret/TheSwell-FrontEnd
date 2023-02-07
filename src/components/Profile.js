import React, { useState, useEffect, useContext } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Profile.css";

const Profile = () => {
  let { userId } = useParams();

  const initialValue = {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    street: "",
    city: "",
    zip_code: "",
    country: "",
    password: "",
    level: "",
    image: "",
    role: "",
  };

  const [user, setUser] = useState(initialValue);

  const [details, setDetails] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      getProfil();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const getProfil = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log(decoded.user._id);

    axios
      .get(`http://localhost:8000/api/users/${decoded.user._id}`)
      .then((res) => setUser(res.data));

    setDetails({
      id: decoded.user._id,
      username: decoded.user.username,
      email: decoded.user.email,
      first_name: decoded.user.first_name,
      last_name: decoded.user.last_name,
      street: decoded.user.street,
      city: decoded.user.city,
      zip_code: decoded.user.zip_code,
      country: decoded.user.country,
      password: decoded.user.password,
      level: decoded.user.level,
      image: decoded.user.image,
      role: decoded.user.role,
    });
  };
  // console.log(user.image);
  return (
    <div className="profile">
      <div>
        <h1>YOUR PROFILE</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="circle-image">
              <img
                src={`http://localhost:8000${user.image}`}
                alt=""
                className="img"
              />
            </td>
          </tr>

          <tr>
            <td>
              <h2>Vos informations</h2>
            </td>
          </tr>
          <div className = "persoInfos">
          <tr>
            <td>Id:</td>
            <td>{details.id}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>First name:</td>
            <td>{user.first_name}</td>
          </tr>
          <tr>
            <td>Last name:</td>
            <td>{user.last_name}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{user.street}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{user.city}</td>
          </tr>
          <tr>
            <td>Zip code:</td>
            <td>{user.zip_code}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{user.country}</td>
          </tr>
          </div>
        </tbody>
      </table>
      <div>
        <button className="button-name">
          <Link to={`/surveys/${details.id}`} className="btn-mycomments">
            Surveys history
          </Link>
        </button>
        <button className="button-name">
          <Link to={`/edit/${details.id}`}>Edit my profile</Link>
        </button>
      </div>

      <div>
        <h2>Mes informations surf</h2>
        <tbody>
          <tr>
            <td>Mon niveau: {user.level}</td>
          </tr>
          <tr>
            <td>Mes spots de références:</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default Profile;
