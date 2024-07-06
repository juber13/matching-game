/* eslint-disable react/prop-types */

import infoImage from "../assets/images/messagebox.png";
import monkeyImage from "../assets/images/happyMonkey.png";
import startBtnImage from "../assets/images/start.png";
import prevBtnImage from "../assets/images/back.png";

const Intro = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className='activity-container'>
      <div className='background'></div>

      <div className='prev-image-container' style={{}}>
        <div className='progress'>
          <img
            src={prevBtnImage}
            alt='prev-btn-png'
            style={{ width: "100px" }}
            onClick={goToPrevPage}
          />
        </div>
      </div>

      <div className='monkey-image-container'>
        <div className='message flex'>
          <img src={infoImage} alt='info-avatar' width={"420px"} />
          <h1 className='message-text' style={{ top: "20%" }}>
            Hi, I am Mizo and <br />I love bananas 🍌
          </h1>
        </div>
        <div className='monkey'>
          <img src={monkeyImage} alt='happy-monkey-avatar' />
        </div>
      </div>

      <div className='start-btn-container'>
        <img
          src={startBtnImage}
          alt='start-btn-png'
          width={"250px"}
          style={{ cursor: "pointer" }}
          onClick={goToNextPage}
        />
      </div>
    </div>
  );
};

export default Intro;
