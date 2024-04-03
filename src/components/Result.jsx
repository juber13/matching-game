
import React from 'react'


import bgImage from '../assets/images/bg1.png'
import infoImage from '../assets/images/messagebox.png'
import monkeyImage from '../assets/images/happyMonkey.png'
import yesBtnImage from '../assets/images/yes.png'
import prevBtnImage from '../assets/images/back.png'
import BalnkBanana from '../assets/images/blank-banana-2.png'

const Intro3 = ({ goToNextPage , goToPrevPage }) => {
    return (
        <div className='home-container'>
            <div className="background">
                <img src={bgImage} alt="" />
            </div>

            <div className="prev-image-container" style={{ position: "absolute", top: "3%", left: "2%", display: "inline" }}>
                <div className='progress'>
                    <img src={prevBtnImage} alt="prev-btn-png" style={{ width: "100px" }} onClick={goToPrevPage}/>
                    <div className="progress-bar">
                        <img src={BalnkBanana} alt="" className='blank_banana' />
                    </div>
                </div>
            </div>

            <div className="monkey-image-container">
                <div className="message flex">
                    <img src={infoImage} alt="info-avatar" width={"420px"} />
                    <h1 className='message-text' style={{ top: "20%" }}>Can you help me get<br /> some? 🤔</h1>
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

export default Intro3