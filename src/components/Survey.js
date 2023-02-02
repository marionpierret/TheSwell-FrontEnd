import { useState, useContext } from "react";
import { TheSwellContext } from "../context/TheSwellContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Survey = () => {
  const [crowd, setCrowd] = useState(0);
  const [matchCondition, setMatchCondition] = useState("");
  const [current, setCurrent] = useState("");
  const [parking, setParking] = useState("");
  const [clean, setClean] = useState("");
  const [danger, setDanger] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [swimmers, setSwimmers] = useState("");
  const [mood, setMood] = useState("");
  const [userId, setUserId] = useState("");
  const [spotId, setSpotId] = useState("");

  const [surveyData, setSurveyData] = useState();

  // Récupère la data du user
  const token = localStorage.usertoken;
  const decoded = jwt_decode(token);

  let navigate = useNavigate();
  console.log(decoded.user._id);

  const createSurvey = (e) => {
    e.preventDefault();

    const newSurvey = {
      crowd: crowd,
      match_conditions: matchCondition,
      current: current,
      parking: parking,
      clean: clean,
      danger: danger,
      restaurants: restaurant,
      swimmers: swimmers,
      mood: mood,
      userId: decoded.user._id,
      spotId: spotId,
    };

    // const formData = new FormData();
    // formData.append("crowd", crowd);
    // formData.append("match_condition", matchCondition);
    // formData.append("current", current);
    // formData.append("parking", parking);
    // formData.append("clean", clean);
    // formData.append("danger", danger);
    // formData.append("restaurants", restaurant);
    // formData.append("swimmers", swimmers);
    // formData.append("mood", mood);
    // formData.append("userId", decoded.user._id);
    // formData.append("spotId", spots)

    axios
      .post("http://localhost:8000/api/surveys", newSurvey, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setSurveyData(res);
        // navigate('/profile')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={createSurvey}>
        <h1>Spot Informations</h1>
        <div>
          <label>How crowded was the spot ?</label>
          <input
            type="number"
            placeholder="How many people where their ?"
            value={crowd}
            onChange={(e) => setCrowd(e.target.value)}
          />
        </div>
        <div>
          <label>Did the conditions matched the suf report ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={matchCondition}
            onChange={(e) => setMatchCondition(e.target.value)}
          />
        </div>
        <div>
          <label>Was there some current ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div>
          <label>Where there parking spots available ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={parking}
            onChange={(e) => setParking(e.target.value)}
          />
        </div>
        <div>
          <label>Was the beach clean ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={clean}
            onChange={(e) => setClean(e.target.value)}
          />
        </div>
        <div>
          <label>
            Were there dangers in the water - jellyfish, sharks ... ?
          </label>
          <input
            type="boolean"
            placeholder="true / false"
            value={danger}
            onChange={(e) => setDanger(e.target.value)}
          />
        </div>
        <div>
          <label>Are there some restaurants near by ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          />
        </div>
        <div>
          <label>Where there swimmers in the water ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={swimmers}
            onChange={(e) => setSwimmers(e.target.value)}
          />
        </div>
        <div>
          <label>Where the locals welcoming ?</label>
          <input
            type="boolean"
            placeholder="true / false"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </div>
        <div>
          <label>SpotId</label>
          <input
            type="text"
            value={spotId}
            onChange={(e) => setSpotId(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey;
