import RecommendedSpot from "./RecommendedSpot";
import SurfInfos from "./SurfInfos";
import SurfMap from "./SurfMap";
import SurveysAnswer from "./SurveysAnswer";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MemberPage = () => {
  // State variable initialized to true to hide/show the <SurveyAswer /> component
  const [isShown, setIsShown] = useState(true);

  // Display (or not) the <SurveyAswer /> component on the button click
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  // useParams used to get the spot ID
  let { id } = useParams();

  return (
    <div>
      <SurfMap />
      <RecommendedSpot />
      <SurfInfos />
      <div style={{ textAlign: "center" }}>
        <button
          role="button"
          className="button-name"
          style={{ margin: "25px 40px" }}
        >
          {/* link to a survey answering questions about this particular spot */}
          <Link to={`/survey/spot/${id}`} style={{textDecoration:'none', color:'black'}}>Give us your feedback</Link>
        </button>
        <button
          onClick={handleClick}
          role="button"
          className="button-name"
          style={{ margin: "25px 40px" }}
        >
          Spot feedback
        </button>
        <div style={{ display: isShown ? "none" : "block" }}>
          <SurveysAnswer />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
