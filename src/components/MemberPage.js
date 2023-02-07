import Navbar from "./NavBar";
import RecommendedSpot from "./RecommendedSpot";
import SurfInfos from "./SurfInfos";
import SurfMap from "./SurfMap";
import SurveysAnswer from "./SurveysAnswer";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MemberPage = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

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
          <Link to={`/survey/spot/${id}`}>Give us your feedback</Link>
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
