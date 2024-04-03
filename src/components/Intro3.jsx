import React from 'react'

import bgImage from '../assets/images/bg1.png'
import infoImage from '../assets/images/messagebox.png'
import monkeyImage from '../assets/images/happyMonkey.png'
import startBtnImage from '../assets/images/start.png'
import prevBtnImage from '../assets/images/back.png'
import BalnkBanana from '../assets/images/blank-banana-2.png'
import playBtnImage from '../assets/images/play.png'

import yesBtnImage from '../assets/images/yes.png'




const Home = ({ goToNextPage, goToPrevPage }) => {
    return (
        <div className='activity-container'>
            <div className="background"></div>
            <div className="prev-image-container" style={{}}>
                <div className='progress'>
                    <img src={prevBtnImage} alt="prev-btn-png" style={{ width: "100px" }} onClick={goToPrevPage} />
                    <div className='progress-container'>
                        <div className="progress-bar"></div>
                        <img src={BalnkBanana} alt="" className='blank_banana' />
                    </div>
                </div>
            </div>

            <div className="monkey-image-container">
                <div className="message flex">
                    <img src={infoImage} alt="info-avatar" width={"420px"} />
                    <h1 className='message-text' style={{ top: "20%" }}>Can you help <br />me get some? 🤔</h1>
                </div>
                <div className="monkey">
                    <img src={monkeyImage} alt="happy-monkey-avatar" />
                </div>
            </div>



            <div className="start-btn-container">
                <img src={yesBtnImage} alt="start-btn-png" width={"250px"} style={{ cursor: "pointer" }} onClick={goToNextPage} />
            </div>
        </div>
    )
}

export default Home