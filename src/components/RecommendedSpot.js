import { useContext, useEffect, useState } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useResolvedPath } from "react-router-dom";

const RecommendedSpot = () => {
  const { value1, value9, value4 } = useContext(TheSwellContext);
  const [surfData, setSurfData] = value1;
  const [spots, setSpots] = value9;
  const [users, setUsers] = value4

  const [loading, setLoading] = useState(false);
  const [yourSurf, setYourSurf] = useState([]);

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  const whereToSurf = async () => {
    const responseArray = await Promise.all(
      spots.map(
        async (e) =>
          await axios.get(
            `https://marine-api.open-meteo.com/v1/marine?latitude=${e.latitude}&longitude=${e.longitude}&hourly=wave_height&hourly=wave_period&hourly=wave_direction`
          )
      )
    );
    const secondArray = await responseArray.map((element) => {
      return element.data.hourly.wave_height;
    });
    const first24Hours = await secondArray.map((element) => {
      return element.slice(0, 24);
    });
    return first24Hours;
  };

  async function fetchWhereToSurf() {
    try {
      const data = await whereToSurf();
      setYourSurf(data);
      setLoading(true)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchWhereToSurf();
  }, []);

  const newArray = yourSurf.map((e, id) => [
    e,
    spots[id].spot_name,
    spots[id].latitude,
    spots[id].longitude,
  ]);
  console.log(newArray)

const levelOne = newArray.map((e, i) => [
  e[0].filter(el => el < 1.00),
  e[1]
])

const levelTwo = newArray.map((e, i) => [
  e[0].filter(el => el < 1.50 && el > 1 ),
  e[1]
])

const levelThree = newArray.map((e, i) => [
  e[0].filter(el => el < 2.00 && el > 1.5),
  e[1]
])

const levelFour = newArray.map((e, i) => [
  e[0].filter(el => el > 2),
  e[1]
])


const findUser = users.map((e) => {
  return(
    [e._id, e.level]
  )
})


  return (
    <div>
    <div>
    {loading && findUser.find(element => element[0] == decoded.user._id && element[1] === 1) &&
    levelOne.map((e) => {
      return (
        e[0] != 0 &&
        <div>{e[1]}</div>
      )
    })}
    </div>
    <div>
    {loading && findUser.find(element => element[0] == decoded.user._id && element[1] === 2) &&
    levelTwo.map((e) => {
      return (
        e[0] != 0 &&
        <div>{e[1]}</div>
      )
    })}
    </div>
    <div>
    {loading && findUser.find(element => element[0] == decoded.user._id && element[1] === 3) &&
    levelThree.map((e) => {
      return (
        e[0] != 0 &&
        <div>{e[1]}</div>
      )
    })}
    </div>
    <div>
    {loading && findUser.find(element => element[0] == decoded.user._id && element[1] === 4) &&
    levelFour.map((e) => {
      return (
        e[0] != 0 &&
        <div>{e[1]}</div>
      )
    })}
    </div>
    </div>
  );
};

export default RecommendedSpot;
