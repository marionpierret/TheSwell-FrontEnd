import { TheSwellContext } from "../context/TheSwellContext";
import { useContext, useState, useEffect } from "react";

const SurfInfos = () => {
  const { value1, value5, value7 } = useContext(TheSwellContext);
  const [surfData, setSurfData] = value1;
  const [windData, setWindData] = value5;
  const [query, setQuery] = value7;
  console.log(surfData);
  console.log(windData);

  return (
    <div>
      <p>{query}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "0px 25px" }}>
          <h3>Time</h3>
          {surfData.hourly &&
            surfData.hourly.time.map((e) => {
              return (
                <div>
                  <div style={{ margin: "10px 0px" }}>{e.replaceAll('-', '/').replace('T', ' ').replace(':', 'h')}</div>
                </div>
              );
            })}
        </div>
        <div style={{ margin: "0px 25px" }}>
          <h3>Wave direction</h3>
          {surfData.hourly &&
            surfData.hourly.wave_direction.map((e) => {
              return (
                <div>
                  {e <= 11
                    ? (e = "N")
                    : 11 < e && e <= 34
                    ? (e = "N NE")
                    : 34 < e && e <= 56
                    ? (e = "NE")
                    : 56 < e && e <= 79
                    ? (e = "E NE")
                    : 79 < e && e <= 101
                    ? (e = "E")
                    : 101 < e && e <= 124
                    ? (e = "E SE")
                    : 124 < e && e <= 146
                    ? (e = "SE")
                    : 146 < e && e <= 169
                    ? (e = "S SE")
                    : 169 < e && e <= 191
                    ? (e = "S")
                    : 191 < e && e <= 214
                    ? (e = "S SW")
                    : 214 < e && e <= 236
                    ? (e = "SW")
                    : 236 < e && e <= 259
                    ? (e = "W SW")
                    : 259 < e && e <= 281
                    ? (e = "W")
                    : 281 < e && e <= 304
                    ? (e = "W NW")
                    : 304 < e && e <= 326
                    ? (e = "NW")
                    : 326 < e && e <= 349
                    ? (e = "N NW")
                    : e = "N"}
                  <div style={{ margin: "10px 0px" }}>{e}</div>
                </div>
              );
            })}
        </div>
        <div style={{ margin: "0px 25px" }}>
          <h3>Wave height</h3>
          {surfData.hourly &&
            surfData.hourly.wave_height.map((e) => {
              return (
                <div>
                  <div style={{ margin: "10px 0px" }}>{e} m</div>
                </div>
              );
            })}
        </div>
        <div style={{ margin: "0px 25px" }}>
          <h3>Wave period</h3>
          {surfData.hourly &&
            surfData.hourly.wave_period.map((e) => {
              return (
                <div>
                  <div style={{ margin: "10px 0px" }}>{Math.round(e)} sec</div>
                </div>
              );
            })}
        </div>
        <div style={{ margin: "0px 25px" }}>
          <h3>Wind direction</h3>
          {windData.hourly &&
            windData.hourly.winddirection_10m.map((e) => {
              return (
                <div>
                  {e <= 11
                    ? (e = "N")
                    : 11 < e && e <= 34
                    ? (e = "N NE")
                    : 34 < e && e <= 56
                    ? (e = "NE")
                    : 56 < e && e <= 79
                    ? (e = "E NE")
                    : 79 < e && e <= 101
                    ? (e = "E")
                    : 101 < e && e <= 124
                    ? (e = "E SE")
                    : 124 < e && e <= 146
                    ? (e = "SE")
                    : 146 < e && e <= 169
                    ? (e = "S SE")
                    : 169 < e && e <= 191
                    ? (e = "S")
                    : 191 < e && e <= 214
                    ? (e = "S SW")
                    : 214 < e && e <= 236
                    ? (e = "SW")
                    : 236 < e && e <= 259
                    ? (e = "W SW")
                    : 259 < e && e <= 281
                    ? (e = "W")
                    : 281 < e && e <= 304
                    ? (e = "W NW")
                    : 304 < e && e <= 326
                    ? (e = "NW")
                    : 326 < e && e <= 349
                    ? (e = "N NW")
                    : e = "N"}
                  <div style={{ margin: "10px 0px" }}>{e}</div>
                </div>
              );
            })}
        </div>
        <div style={{ margin: "0px 25px" }}>
          <h3>Wind speed</h3>
          {windData.hourly &&
            windData.hourly.windspeed_10m.map((e) => {
              return (
                <div>
                  <div style={{ margin: "10px 0px" }}>{e} km/h</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SurfInfos;
