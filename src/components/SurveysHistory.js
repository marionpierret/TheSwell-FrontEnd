import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";

const SurveysHistory = () => {
  const { value3, value9 } = useContext(TheSwellContext);
  const [surveys, setSurveys] = value3;
  const [spots, setSpots] = value9

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  console.log(surveys);
  console.log(decoded);
  console.log(spots)

  const mySurveys = surveys.find(
    (element) => element.userId == decoded.user._id
  );
//   console.log(mySurveys)

//   const spotName = spots.find((element) => element._id == surveys.spotId).map((e) => {
//     return(
//         e
//     )
//   })
//   console.log(spotName)

//   const mySpots = spots.map((e) => {
//     return(
//         e.find((element) => element._id == surveys.spotId)
//     )
//   })
//   console.log(mySpots)

// const spotName = () => {
//     const mySpot = spots.find((element) => element._id == surveys[0].spotId)
//     return console.log(mySpot)
// }

// useEffect(() => {
//     spotName();
//   }, []);

  return (
    <div>
      {mySurveys ? (
        surveys
          .filter((e) => e.userId == decoded.user._id)
          .map((el) => {
            {/* console.log(el.spotId) */}
            return (
              <div className="card">
                <h3 style={{textAlign:'center'}}>{el.spot_name}</h3>
                <div className="row">
                  <p>How clean was the spot today ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.clean}
                  </h3>
                </div>
                <div className="row">
                  <p>How crowded was the spot today ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.crowd}
                  </h3>
                </div>
                <div className="row">
                  <p>How bad was the current today ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.current}
                  </h3>
                </div>
                <div className="row">
                  <p>Were there some danger in te water ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.danger}
                  </h3>
                </div>
                <div className="row">
                  <p>How welcoming were the locals ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.mood}
                  </h3>
                </div>
                <div className="row">
                  <p>Were there parking spots available ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.parking}
                  </h3>
                </div>
                <div className="row">
                  <p>Spots to eat and drink around ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.restaurants}
                  </h3>
                </div>
                <div className="row">
                  <p>Were there many swimmers ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.swimmers}
                  </h3>
                </div>
                <div className="row">
                  <p>Did the conditions matched the report ?</p>
                  <h3 style={{ margin: "0px 30px" }}>
                    {el.match_conditions}
                  </h3>
                </div>
              </div>
            );
          })
      ) : (
        <p>You did not fill any surveys</p>
      )}
    </div>
  );
};

export default SurveysHistory;
