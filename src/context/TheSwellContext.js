import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TheSwellContext = createContext();

export const TheSwellController = ({children}) => {
  const [surfData, setSurfData] = useState([]);
  const [windData, setWindData] = useState([]);
  const [comments, setComments] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSurfData = async () => {
    try {
      const callData = await axios.get(
        'https://marine-api.open-meteo.com/v1/marine?latitude=44.98&longitude=-1.08&hourly=wave_height&hourly=wave_period&hourly=wave_direction'
      );
      setSurfData(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWindData = async () => {
    try {
      const callData = await axios.get(
        'https://api.open-meteo.com/v1/meteofrance?latitude=44.98&longitude=-1.08&hourly=windspeed_10m&hourly=winddirection_10m'
      );
      setWindData(callData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchSurfData();
  }, []);

  useEffect(() => {
    fetchWindData();
  }, []);

  return (
    <TheSwellContext.Provider
      value={{
        value1: [surfData, setSurfData],
        value2: [comments, setComments],
        value3: [surveys, setSurveys],
        value4: [users, setUsers],
        value5: [windData, setWindData]
      }}
    >
      {loading && children}
    </TheSwellContext.Provider>
  );
};
