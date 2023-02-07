import "./css/App.css";
import { TheSwellContext } from "./context/TheSwellContext";
import { useContext, useState, useEffect } from "react";
import SurfInfos from "./components/SurfInfos";
import SurfMap from "./components/SurfMap";
import SearchBar from "./components/SearchBar";
import Survey from "./components/Survey";
import header from "./images/header.png";
import Footer from "./components/Footer";

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
          Looking for the best place to surf? 
          Whether you're a beginner or an experienced surfer, you're in the
          right place! 
          The Swell is there to help you find the best location to match your profile.
          You can find all the interesting information and share your surf session experience. 
          For this, do not hesitate to register and join the Swell community!
        </p>
      </div>
      
      <div className="mapWithInfos">
     
        <div className="map">
        <SearchBar />
          <SurfMap />
        </div>
        <div className="info">
          <tr>
          <td style={{width: "100px"}}>
          <h2>Surf infos</h2>
          </td>
          </tr>
          <tr>
          <td>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            cursus tempor ornare. Etiam congue justo a ante efficitur, in
            vestibulum.
          </p>
          </td>
          </tr>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
