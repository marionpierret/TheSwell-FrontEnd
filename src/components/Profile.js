import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Profile = () => {

  const [details, setDetails] = useState({
    id : "",
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
    role: ""
  });

  useEffect(() => {
    getProfil();
  }, []);

  const getProfil = async  () => {
    const token = await localStorage.usertoken;
    const decoded = await jwt_decode(token);
    console.log(decoded);
    setDetails({
      id : decoded.user._id,
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
      role: decoded.user.role
    })

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
              <td>Id</td>
              <td>{details.id}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{details.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{details.email}</td>
            </tr>
            <tr>
              <td>First name</td>
              <td>{details.first_name}</td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>{details.last_name}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{details.street}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{details.city}</td>
            </tr>
            <tr>
              <td>Zip code</td>
              <td>{details.zip_code}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{details.country}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{details.password}</td>
            </tr>
            <tr>
              <td>Level</td>
              <td>{details.level}</td>
            </tr>
            <tr>
              <td>Image</td>
              <td>{details.image}</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>{details.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
