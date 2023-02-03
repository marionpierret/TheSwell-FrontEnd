import "./css/App.css";
import { TheSwellContext } from "./context/TheSwellContext";
import { useContext, useState, useEffect } from "react";
import SurfInfos from "./components/SurfInfos";
import SurfMap from './components/SurfMap'
import SearchBar from './components/SearchBar'
import Survey from "./components/Survey";
import header from './images/header.png'
import Footer from './components/Footer'


function App() {
  const { value1, value2, value3, value4, value5 } = useContext(TheSwellContext);
  
  const [surfData, setSurfData] = value1;
  const [windData, setWindData] = value5;

  return (
    <div className="App">
<div className="header">
    <img src={header} alt=""/>
    </div>
    <div className="Presentation">
      <h1>Welcome!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tempus urna. Sed sed tempor dui, et tempus libero. Suspendisse urna sem, volutpat sit amet posuere quis, fringilla blandit tortor. Quisque id mauris turpis. In pulvinar consequat imperdiet. Suspendisse potenti. Proin cursus fringilla rhoncus.

Donec vehicula lacinia risus non ornare. Donec elementum erat vel tortor sodales, ac fringilla eros cursus. Cras sagittis risus ac leo mollis, vel volutpat ipsum molestie. Proin in scelerisque justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod pharetra interdum. In eu odio vel nunc dapibus tempus ut nec lorem. Nunc euismod diam sit.</p>
    </div>
      <SearchBar/>
      <div className = "mapWithInfos">
        <div className="map">
      <SurfMap />
      </div>
      <div className="info">
        <h2>Surf infos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus tempor ornare. Etiam congue justo a ante efficitur, in vestibulum.</p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
