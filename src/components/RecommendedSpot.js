import { useContext, useEffect, useState } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import axios from "axios";

const RecommendedSpot = () => {
  const { value1, value9 } = useContext(TheSwellContext);
  const [surfData, setSurfData] = value1;
  const [spots, setSpots] = value9;

  const [loading, setLoading] = useState(false);
//   const [yourSurf, setYourSurf] = useState([]);
//   const [yourSpot, setYourSpot] = useState([]);

  const surfArray = [];
  const matchLevelArray = []

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);
  //   console.log(decoded)
  console.log(spots);

  const whereToSurf = () => {
    spots.map((e) => {
      try {
        const callData = axios.get(
          `https://marine-api.open-meteo.com/v1/marine?latitude=${e.latitude}&longitude=${e.longitude}&hourly=wave_height&hourly=wave_period&hourly=wave_direction`
        );
        console.log(callData);
        surfArray.push(callData);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    whereToSurf();
  }, []);

  console.log(surfArray);

  return (
    <div>
      {/* {decoded.user.level == 1 &&
        
        } */}
    </div>
  );
};

export default RecommendedSpot;
