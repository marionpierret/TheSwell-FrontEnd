import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";

const EditUsers = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    street: "",
    city: "",
    zip_code: "",
    country: "",
    level: "",
    image: "",
  });

  const editUser = (e) => {
    e.preventDefault();

    console.log(user);

    axios
      .put(`http://localhost:8000/api/users/${id}`, user)
      .then((res) => console.log(res));
    navigate("/");
    navigate("/profile");
  };

  return (
    <div>
      <div className="register-box">
        <div className="register-txt">
          <tr>
            <td style={{ textAlign: "center" }}>
              <h2>Edit</h2>
            </td>
            <td>
              <div className="container_mouse">
                <span className="mouse-btn">
                  <span className="mouse-scroll"></span>
                </span>
                <span style={{ color: "white", fontSize: "10px" }}>
                  Scroll Down
                </span>
              </div>
            </td>
          </tr>
        </div>
        <form onSubmit={editUser}>
          <div className="user-box">
            <input
              type="firstName"
              name="first_name"
              value={user.first_name}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>First name</label>
          </div>
          <div className="user-box">
            <input
              type="lastName"
              name="last_name"
              value={user.last_name}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>Last name</label>
          </div>
          <div className="user-box">
            <input
              type="street"
              className="form-control"
              name="street"
              value={user.street}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>Street</label>
          </div>
          <div className="user-box">
            <input
              type="city"
              name="city"
              value={user.city}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>City</label>
          </div>
          <div className="user-box">
            <input
              type="zipCode"
              name="zip_code"
              value={user.zip_code}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>Zip code</label>
          </div>
          <div className="user-box">
            <input
              type="country"
              name="country"
              value={user.country}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>Country</label>
          </div>
          <div className="user-box">
            <input
              type="level"
              name="level"
              // value={user.level}
              onChange={(e) =>
                e.target.value &&
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <label>Level</label>
          </div>
          <div className="user-box">
            <input
              type="file"
              name="image"
              onChange={(e) =>
                e.target.files[0] &&
                setUser({ ...user, [e.target.name]: e.target.files[0] })
              }
            />
            <label>Image</label>
          </div>
          <div className="submitBtn">
            <button type="submit" className="registerBtn">
              <span>Submit</span>
              <div className="top"></div>
              <div className="left"></div>
              <div className="bottom"></div>
              <div className="right"></div>
            </button>
          </div>
        </form>
      </div>
      {user && (
        <>
          {/* <h1>{data.nameFile}</h1> */}
          {/* <img width={'200px'} src={`http://localhost:8000/api/users${data.image}`} alt={data.image}/>  */}
        </>
      )}
    </div>
  );
};

export default EditUsers;
