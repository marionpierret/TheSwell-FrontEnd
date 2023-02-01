import { TheSwellContext } from "../context/TheSwellContext"
import { useContext, useState, useEffect } from "react";

const SurfInfos = () => {
  const { value1, value5 } = useContext(TheSwellContext);
  const [surfData, setSurfData] = value1;
  const [windData, setWindData] = value5;
  console.log(surfData)
  console.log(windData)

  return (
  <div>
    <p>{surfData.latitude}</p>
    {surfData.hourly &&
    surfData.hourly.wave_height.map((e, i) => {
        return(
            <div key={i}>
                <p>{e}</p>
            </div>
        )
    })
    }
  </div>
  );
};

export default SurfInfos;
