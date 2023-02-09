import "../css/Home.css";
import SurfMap from "../components/SurfMap";
import SearchBar from "../components/SearchBar";
import header from "../images/header.png";
import { Link } from "react-router-dom";
import iconRegister from "../images/verified.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={header} alt="" />
      </div>
      <div className="presentation">
        <h1>Welcome!</h1>
        <p>
          Looking for the best place to surf? <br />
          Whether you're a beginner or an experienced surfer, you're in the
          right place! <br />
          The Swell is there to help you find the best location to match your
          profile. You can find all the interesting information and share your
          surf session experience. <br />
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
            To get all the informations about a spot, <br />
            please register.
            <br />
            <Link to="/register">
              <img
                src={iconRegister}
                alt="register"
                style={{ width: "50px", margin: "30px" }}
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
