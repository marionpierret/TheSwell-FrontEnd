import { TheSwellContext } from "../context/TheSwellContext";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import "../css/SurveysHistory.css";

const SurveysHistory = () => {
  const { value3 } = useContext(TheSwellContext);
  const [surveys, setSurveys] = value3;

  const token = localStorage.usertoken;
  const decoded = token && jwt_decode(token);

  // In all the surveys in our database, check if the user has filled at least one survey
  const mySurveys = surveys.find(
    (element) => element.userId == decoded.user._id
  );

  return (
    <div>
      {/* If mySurveys exists, return all of the surveys he filled */}
      {mySurveys ? (
        surveys
          .filter((e) => e.userId == decoded.user._id)
          .map((el) => {
            return (
              <div className="card">
                <h3 style={{ textAlign: "center" }}>{el.spot_name}</h3>
                <div className="row-survey">
                  <p>How clean was the spot today ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.clean}</h3>
                </div>
                <div className="row-survey">
                  <p>How crowded was the spot today ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.crowd}</h3>
                </div>
                <div className="row-survey">
                  <p>How bad was the current today ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.current}</h3>
                </div>
                <div className="row-survey">
                  <p>Were there some danger in te water ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.danger}</h3>
                </div>
                <div className="row-survey">
                  <p>How welcoming were the locals ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.mood}</h3>
                </div>
                <div className="row-survey">
                  <p>Were there parking spots available ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.parking}</h3>
                </div>
                <div className="row-survey">
                  <p>Spots to eat and drink around ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.restaurants}</h3>
                </div>
                <div className="row-survey">
                  <p>Were there many swimmers ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.swimmers}</h3>
                </div>
                <div className="row-survey">
                  <p>Did the conditions matched the report ?</p>
                  <h3 style={{ margin: "0px 30px" }}>{el.match_conditions}</h3>
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
