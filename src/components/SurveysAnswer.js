import { TheSwellContext } from "../context/TheSwellContext";
import { useContext } from "react";
import "../css/SurveysAnswer.css";

const SurveysAnswer = () => {
  const { value3, value6, value9 } = useContext(TheSwellContext);
  const [surveys, setSurveys] = value3;
  const [locationData, setLocationData] = value6;
  const [spots, setSpots] = value9;

  const cleanArray = [0.0];
  const crowdArray = [0.0];
  const currentArray = [0.0];
  const dangerArray = [0.0];
  const moodArray = [0.0];
  const parkingArray = [0.0];
  const restaurantArray = [0.0];
  const swimmersArray = [0.0];
  const matchConditionArray = [0.0];

  const spotsFiltered = spots.filter(
    (spot) =>
      spot.latitude == locationData.latitude.toFixed(2) &&
      spot.longitude == locationData.longitude.toFixed(2)
  );

  return (
    <div className="card">
      {spotsFiltered.map((spot) => {
        const surveysFiltered = surveys.filter(
          (survey) => spot._id == survey.spotId
        );
        return surveysFiltered.map((survey) => {
          {
            cleanArray.push(survey.clean);
          }
          {
            crowdArray.push(survey.crowd);
          }
          {
            currentArray.push(survey.current);
          }
          {
            dangerArray.push(survey.danger);
          }
          {
            moodArray.push(survey.mood);
          }
          {
            parkingArray.push(survey.parking);
          }
          {
            restaurantArray.push(survey.restaurants);
          }
          {
            swimmersArray.push(survey.swimmers);
          }
          {
            matchConditionArray.push(survey.match_conditions);
          }
          return <></>;
        });
      })}
      {cleanArray != 0.0 &&
      crowdArray != 0.0 &&
      currentArray != 0.0 &&
      dangerArray != 0.0 &&
      moodArray != 0.0 &&
      parkingArray != 0.0 &&
      restaurantArray != 0.0 &&
      swimmersArray != 0.0 &&
      matchConditionArray != 0.0 ? (
        <div style={{display:'flex', flexDirection:'column', alignContent:'flex-start'}}>
          <div className='row'>
            <p>How clean was the spot today ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                cleanArray.reduce((a, b) => a + b) /
                (cleanArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>How crowded was the spot today ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                crowdArray.reduce((a, b) => a + b) /
                (crowdArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>How bad was the current today ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                currentArray.reduce((a, b) => a + b) /
                (currentArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>Were there some danger in te water ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                dangerArray.reduce((a, b) => a + b) /
                (dangerArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>How welcoming were the locals ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                moodArray.reduce((a, b) => a + b) /
                (moodArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>Were there parking spots available ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                parkingArray.reduce((a, b) => a + b) /
                (parkingArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>Spots to eat and drink around ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                restaurantArray.reduce((a, b) => a + b) /
                (restaurantArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>Were there many swimmers ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                swimmersArray.reduce((a, b) => a + b) /
                (swimmersArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <div className='row'>
            <p>Did the conditions matched the report ?</p>
            <h3 style={{ margin: "0px 30px" }}>
              {(
                matchConditionArray.reduce((a, b) => a + b) /
                (matchConditionArray.length - 1)
              ).toFixed(2)}
            </h3>
          </div>
          <h4>(1 being the lowest, 10 the highest)</h4>
        </div>
      ) : (
        <div>
          <p>Be the first to give us your feedback on this spot !</p>
        </div>
      )}
    </div>
  );
};

export default SurveysAnswer;
