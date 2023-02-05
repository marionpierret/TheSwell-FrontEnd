import { TheSwellContext } from "../context/TheSwellContext";
import { useContext } from "react";

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
      spot.latitude == locationData.latitude.toFixed(5) &&
      spot.longitude == locationData.longitude.toFixed(5)
  );
  //   const surveysFiltered = surveys.filter(survey => spot._id == survey.spotId )

  return (
    <div>
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
            restaurantArray.push(survey.restaurant);
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
        <div>
          <h3>How clean was the spot today ?</h3>
          <p>
            {(cleanArray.reduce((a, b) => a + b) / cleanArray.length).toFixed(
              2
            )}
            {console.log(cleanArray)}
          </p>
          <h3>How crowded was the spot today ?</h3>
          <p>
            {(crowdArray.reduce((a, b) => a + b) / crowdArray.length).toFixed(
              2
            )}
          </p>
          <h3>How bad was the current today ?</h3>
          <p>
            {(
              currentArray.reduce((a, b) => a + b) / currentArray.length
            ).toFixed(2)}
          </p>
          <h3>Were there some danger on the spot (jellyfish, sharks...) ?</h3>
          <p>
            {(dangerArray.reduce((a, b) => a + b) / dangerArray.length).toFixed(
              2
            )}
          </p>
          <h3>How welcoming were the locals ?</h3>
          <p>
            {(moodArray.reduce((a, b) => a + b) / moodArray.length).toFixed(2)}
          </p>
          <h3>Were there parking spots available ?</h3>
          <p>
            {(
              parkingArray.reduce((a, b) => a + b) / parkingArray.length
            ).toFixed(2)}
          </p>
          <h3>Spots to eat and drink around ?</h3>
          <p>
            {(
              restaurantArray.reduce((a, b) => a + b) / restaurantArray.length
            ).toFixed(2)}
          </p>
          <h3>Were there many swimmers ?</h3>
          <p>
            {(
              swimmersArray.reduce((a, b) => a + b) / swimmersArray.length
            ).toFixed(2)}
          </p>
          <h3>Did the conditions matched the report ?</h3>
          <p>
            {(
              matchConditionArray.reduce((a, b) => a + b) /
              matchConditionArray.length
            ).toFixed(2)}
          </p>
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
