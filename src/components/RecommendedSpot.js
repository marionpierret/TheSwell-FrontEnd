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

//   const surfArray = [];
  const matchLevelArray = [];

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);
  //   console.log(decoded)
  console.log(spots);

  //   const whereToSurf = () => {
  //     spots.map((e) => {
  //       try {
  //         const callData = axios.get(
  //           `https://marine-api.open-meteo.com/v1/marine?latitude=${e.latitude}&longitude=${e.longitude}&hourly=wave_height&hourly=wave_period&hourly=wave_direction`
  //         )
  //         console.log(callData)
  //         surfArray.push(callData)
  //         setLoading(true);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     });
  //   };

  const whereToSurf = async () => {
    const responseArray = await Promise.all(
      spots.map(
        async (e) =>
          await axios.get(
            `https://marine-api.open-meteo.com/v1/marine?latitude=${e.latitude}&longitude=${e.longitude}&hourly=wave_height&hourly=wave_period&hourly=wave_direction`
          )
      )
    )
    console.log(responseArray)
    const secondResponse = responseArray.map((e, i) => e.data.hourly.wave_height)
    console.log(secondResponse)
    const thirdResponse = secondResponse.map((e) => e.filter((el, i) => i<24))
    const matchLevel1Array = thirdResponse.map((e, i) => e.filter((element) => element < 1.00 ))
    console.log(matchLevel1Array)
    const level = matchLevel1Array.map((e, i) => e!=0 && i)
    console.log(level)
  };

console.log(matchLevelArray)

  useEffect(() => {
    whereToSurf();
  }, []);

  return (
    <div>
    </div>
  );
};

export default RecommendedSpot;
