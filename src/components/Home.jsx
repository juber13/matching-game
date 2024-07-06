/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import infoImage from "../assets/images/messagebox.png";
import monkeyImage from "../assets/images/happyMonkey.png";
import startBtnImage from "../assets/images/start.png";

const Home = ({ goToNextPage }) => {
    return (
        <div className='activity-container'>
            <div className='background'></div>

            <div className='monkey-image-container'>
                <div className='message flex'>
                    <img src={infoImage} alt='info-avatar' width={"420px"} />
                    <h1 className='message-text'>Welcome Kiddo🍌</h1>
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

export default Home;
