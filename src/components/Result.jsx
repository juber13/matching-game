import { useNavigate } from "react-router-dom";

import "./activity.css";
import monkeyImage from "../assets/images/happyMonkey.png";
import restartbtn from "../assets/images/restart-btn.png";
import topDesignImage from "../assets/images/topDesign.png";

// Result component to display the user's score and allow them to restart the game
const Result = () => {
  // Restart the game by resetting the score and navigating to the instructions screen
  const navigate = useNavigate();

  return (
    <div>
      <div className='overlay'></div>
      {/* <Progress /> */}
      <div className='container'>
        {/* ResultCard styled component for the result card layout */}
        <div className='result-card'>
          <img src={topDesignImage} alt='' className='topScore' />
          <div className='scoreText'>
            <p>Earned</p>
            <p> 5 Banana's</p>
          </div>
          <img src={monkeyImage} alt='' className='monkeyImg' />
          {/* Restart button with an onClick handler to restart the game */}
          <img
            src={restartbtn}
            alt=''
            className='restartbtn'
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
