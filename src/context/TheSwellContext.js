import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const TheSwellContext = createContext();

export const TheSwellController = ({ children }) => {
  const [surfData, setSurfData] = useState([]);
  const [windData, setWindData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const [query, setQuery] = useState("Lacanau-Ocean");
  const [input, setInput] = useState("");

  const [comments, setComments] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [users, setUsers] = useState([]);
  const [spots, setSpots] = useState([])

  const [loading, setLoading] = useState(false);

  // let { userId, spotId } = useParams();


  const fetchLocationData = async () => {
    try {
      const callData = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
      );
      setLocationData(callData.data.results[0]);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, [query]);

  // fetch de l'API pour le surf
  const fetchSurfData = async () => {
    try {
      const callData = await axios.get(
        `https://marine-api.open-meteo.com/v1/marine?latitude=${locationData.latitude}&longitude=${locationData.longitude}&hourly=wave_height&hourly=wave_period&hourly=wave_direction`
      );
      setSurfData(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch de l'API pour le vent
  const fetchWindData = async () => {
    try {
      const callData = await axios.get(
        `https://api.open-meteo.com/v1/meteofrance?latitude=${locationData.latitude}&longitude=${locationData.longitude}&hourly=windspeed_10m&hourly=winddirection_10m&hourly=temperature_2m`
      );
      setWindData(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSurfData();
    fetchWindData();
  }, [locationData.longitude, locationData.latitude]);

  // fetch de l'API TheSwell / Users
  const fetchUsersData = async () => {
    try {
      const callData = await axios.get(
        `http://localhost:8000/api/users`
      );
      setUsers(callData.data);
      console.log(callData.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  // fetch de l'API TheSwell / Spots
  const fetchSpotsData = async () => {
    try {
      const callData = await axios.get(
        `http://localhost:8000/api/spots`
      );
      setSpots(callData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSpotsData();
  }, []);

  // fetch de l'API TheSwell / Comments
  const fetchCommentsData = async () => {
    try {
      const callData = await axios.get("http://localhost:8000/api/comments");
      setComments(callData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCommentsData();
  }, []);

  // fetch de l'API TheSwell / Surveys
  const fetchSurveysData = async () => {
    try {
      const callData = await axios.get("http://localhost:8000/api/surveys");
      setSurveys(callData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSurveysData();
  }, []);

  return (
    <TheSwellContext.Provider
      value={{
        value1: [surfData, setSurfData],
        value2: [comments, setComments],
        value3: [surveys, setSurveys],
        value4: [users, setUsers],
        value5: [windData, setWindData],
        value6: [locationData, setLocationData],
        value7: [query, setQuery],
        value8: [input, setInput],
        value9: [spots, setSpots]
      }}
    >
      {loading && children}
    </TheSwellContext.Provider>
  );
};
