import './App.css';
import { TheSwellContext } from './context/TheSwellContext';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const { value1, value2, value3, value4, value5 } = useContext(TheSwellContext)
  const [surfData, setSurfData] = value1;
  const [windData, setWindData] = value5;
  console.log(surfData)
  console.log(windData)

  return (
    <div className="App">
    <p>{surfData.latitude}</p>
    {/* {surfData &&
      surfData.map((e,i) => {
      return(
        <div key={i}>
        <p>{e.latitude}</p>
        </div>
      )
    })} */}
    </div>
  );
}

export default App;
