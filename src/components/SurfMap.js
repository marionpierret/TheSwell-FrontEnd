import { Map, Marker } from "pigeon-maps";
import { useContext } from "react";
import { TheSwellContext } from "../context/TheSwellContext";

const SurfMap = () => {
  const { value6 } = useContext(TheSwellContext);
  const [locationData, setLocationData] = value6;

  return (
    <div className = "surfMap">
      <Map height={300} width={600} defaultCenter={[locationData.latitude, locationData.longitude]} defaultZoom={11}>
        <Marker width={50} anchor={[locationData.latitude, locationData.longitude]} />
      </Map>
    </div>
  );
};

export default SurfMap;
