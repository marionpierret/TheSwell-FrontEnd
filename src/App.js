import "./App.css";
import { TheSwellContext } from "./context/TheSwellContext";
import { useContext, useState, useEffect } from "react";
import SurfInfos from "./components/SurfInfos";
import SurfMap from './components/SurfMap'
import SearchBar from './components/SearchBar'

function App() {
  const { value1, value2, value3, value4, value5 } = useContext(TheSwellContext);
  
  const [surfData, setSurfData] = value1;
  const [windData, setWindData] = value5;

  return (
    <div className="App">
      <SearchBar/>
      <SurfInfos />
      <SurfMap />
    </div>
  );
}

export default App;
