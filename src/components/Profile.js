import React, { useState, useEffect, useContext } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  let navigate = useNavigate();

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

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getProfil();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const getProfil = async () => {
    navigate("/profile");
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

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>
                <img src={user.image} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <h2>Vos informations</h2>
              </td>
            </tr>
            <tr>
              <td>Id</td>
              <td>{details.id}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>First name</td>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{user.street}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{user.city}</td>
            </tr>
            <tr>
              <td>Zip code</td>
              <td>{user.zip_code}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{user.country}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{user.password}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <Link to={`/comments/${details.id}`} className="btn-mycomments">
            Accéder à mon historique de commentaires
          </Link>
          <br></br>
          <Link to={`/edit/${details.id}`}>Editer mon profil </Link>
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
    </div>
  );
};

export default Profile;
