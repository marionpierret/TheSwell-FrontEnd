import "./css/App.css";
import { TheSwellContext } from "./context/TheSwellContext";
import { useContext, useState, useEffect } from "react";
import SurfInfos from "./components/SurfInfos";
import SurfMap from "./components/SurfMap";
import SearchBar from "./components/SearchBar";
import Survey from "./components/Survey";
import header from "./images/header.png";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import iconRegister from "./images/verified.png"


function App() {
  // const { value1, value2, value3, value4, value5 } =
  //   useContext(TheSwellContext);

  // const [surfData, setSurfData] = value1;
  // const [windData, setWindData] = value5;

  return (
    <div className="App">
      <div className="header">
        <img src={header} alt="" />
      </div>
      <div className="presentation">
        <h1>Welcome!</h1>
        <p>
          Looking for the best place to surf? <br/>
          Whether you're a beginner or an experienced surfer, you're in the
          right place! <br/>
          The Swell is there to help you find the best location to match your profile.
          You can find all the interesting information and share your surf session experience. <br/>
          For this, do not hesitate to register and join the Swell community!
        </p>
      </div>
      
      <div className="mapWithInfos">
     
        <div className="map">
        <SearchBar />
          <SurfMap />
        </div>
        <div className="info">
             <p>
            To get all the informations about a spot, <br/>please register.
      <br/>
            <Link to="/register" >
          <img src={iconRegister} alt="register" style={{width:"50px", margin:"30px"}}/>
        </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
