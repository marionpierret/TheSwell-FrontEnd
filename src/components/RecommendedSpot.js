import { useContext, useEffect, useState } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "../css/RecommendedSpot.css";

const RecommendedSpot = () => {
  const { value1, value9, value4 } = useContext(TheSwellContext);
  const [spots, setSpots] = value9;
  const [users, setUsers] = value4;

  const [oneUser, setOneUser] = useState();
  let lvl = [];

  const [loading, setLoading] = useState(false);
  const [secondLoading, setSecondLoading] = useState(false);
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

  const fetchMyUser = async () => {
    try {
      const callData = await axios.get(
        `http://localhost:8000/api/users/${decoded.user._id}`
      );
      setOneUser(callData.data);
      setSecondLoading(true);
      if (oneUser.level == 1) {
        lvl = levelOne;
      }
      if (oneUser.level == 2) {
        lvl = levelTwo;
      }
      if (oneUser.level == 3) {
        lvl = levelThree;
      }
      if (oneUser.level == 4) {
        lvl = levelFour;
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function fetchWhereToSurf() {
    try {
      const data = await whereToSurf();
      setYourSurf(data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  const newArray = yourSurf.map((e, id) => [
    e,
    spots[id].spot_name,
    spots[id].latitude,
    spots[id].longitude,
  ]);

  const levelOne = newArray.map((e, i) => [
    e[0].filter((el) => el < 1.0),
    e[1],
  ]);

  const levelTwo = newArray.map((e, i) => [
    e[0].filter((el) => el < 1.5 && el > 1),
    e[1],
  ]);

  const levelThree = newArray.map((e, i) => [
    e[0].filter((el) => el < 2.0 && el > 1.5),
    e[1],
  ]);

  const levelFour = newArray.map((e, i) => [e[0].filter((el) => el > 2), e[1]]);

  useEffect(() => {
    fetchMyUser();
    fetchWhereToSurf();
  }, []);

  const findUser = users.map((e) => {
    return [e._id, e.level];
  });

  return (
    <div>
      <h4>Best spots for you to surf !</h4>
      <div className="spot-card scroll">
        <div className="div">
          <div>
            {secondLoading &&
              oneUser.level === 1 &&
              levelOne.map((e, i) => {
                return e[0] != 0 && <div className="spot" key={i}>{e[1]}</div>;
              })}
          </div>
          <div>
            {secondLoading &&
              oneUser.level === 2 &&
              levelTwo.map((e, i) => {
                return e[0] != 0 && <div className="spot" key={i}>{e[1]}</div>;
              })}
          </div>
          <div>
            {secondLoading &&
              oneUser.level === 3 &&
              levelThree.map((e, i) => {
                return e[0] != 0 && <div className="spot" key={i}>{e[1]}</div>;
              })}
          </div>
          <div>
            {secondLoading &&
              oneUser.level === 4 &&
              levelFour.map((e, i) => {
                return e[0] != 0 && <div className="spot" key={i}>{e[1]}</div>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSpot;
