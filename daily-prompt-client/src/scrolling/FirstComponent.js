import React from "react";
import GoalSetting from "../images/general navigation/setagoalenabled.png";
import ProgessImage from "../images/my progress overview/Bar chart.png";
import Buddy1 from "../images/Buddies/Carmen Sandiego/05.png";
import DownBtn from "../images/my progress overview/overview-Scroll down indicator.png"
import "./index.css";

export default () => {
  return (
    <div className="component first-component">
      <div className="text-1">
        How's my Social and Emotional Learning going?
      </div>
      <div className="goal">
        <button type="button" className="button">
          Set a goal
        </button>
      </div>
      <div className="progress">
        <img src={ProgessImage} alt="ProgessImage" />
      </div>
      <div className="buddy-1">
        <img src={Buddy1} alt="Buddy1" />
      </div>
      <div className="buddyText">
        Nice job today, Amy. Wanna set a goal?
      </div>
      <div className="downBtn">
        <img src={DownBtn} alt="DownBtn" />
      </div>
      {/* <div className="downBtn">
        <img src={DownBtn} alt="DownBtn" />
      </div> */}

      {/* <div className="setGoal">
        <img src={GoalSetting} alt="Goal" />
      </div> */}
    </div>
  );
};
