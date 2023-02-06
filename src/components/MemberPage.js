import Navbar from "./NavBar";
import RecommendedSpot from "./RecommendedSpot";
import SurfInfos from "./SurfInfos";
import SurfMap from "./SurfMap";
import SurveysAnswer from "./SurveysAnswer";

const MemberPage = () => {
    const displayAnswer = () => {

    }

  return (
    <div>
      <SurfMap />
      <SurfInfos />

      {/* <button role="button" class="button-name">
        Button-name
      </button> */}
      <SurveysAnswer />
      {/* <RecommendedSpot /> */}
    </div>
  );
};

export default MemberPage;
