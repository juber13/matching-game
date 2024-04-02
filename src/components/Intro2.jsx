import React from 'react'

import bgImage from '../assets/images/bg1.png'
import infoImage from '../assets/images/messagebox.png'
import monkeyImage from '../assets/images/happyMonkey.png'
import startBtnImage from '../assets/images/start.png'
import prevBtnImage from '../assets/images/back.png'

const Intro = ({ goToNextPage , goToPrevPage }) => {
    return (
        <div className='home-container'>
            <div className="background">
                <img src={bgImage} alt="" />
            </div>

            <div className="prev-image-container" style={{ position: "absolute", top: "3%", left: "2%" }}>
                <img src={prevBtnImage} alt="prev-btn-png" style={{ width: "100px" }} onClick={goToPrevPage}/>
            </div>

            <div className="monkey-image-container">
                <div className="message flex">
                    <img src={infoImage} alt="info-avatar" width={"420px"} />
                    <h1 className='message-text' style={{ top: "20%" }}>Hi, I am Mizo and I <br />love bananas 🍌</h1>
                </div>
                <div className="monkey">
                    <img src={monkeyImage} alt="happy-monkey-avatar" />
                </div>
            </div>

            <div className="start-btn-container">
                <img src={startBtnImage} alt="start-btn-png" width={"250px"} style={{ cursor: "pointer" }} onClick={goToNextPage} />
            </div>
        </div>
    )
}

export default Intro