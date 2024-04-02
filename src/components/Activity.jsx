import React, { useEffect, useState } from 'react'
import bgImage from '../assets/images/bg1.png'
import prevBtnImage from '../assets/images/back.png'
import BalnkBanana from '../assets/images/blank-banana-2.png'
import pinkImageCard from '../assets/images/pinkCard.png'
import blueImageCard from '../assets/images/blueCard.png'



const Activity = ({ goToNextPage, goToPrevPage }) => {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        let id;
        id = setInterval(() => {

            setTimer(prev => prev - 1);
        }, 1000)
        if (timer <= 0) clearInterval(id);

        return () => clearInterval(id);

    }, [timer])
    return (
        <div className='home-container'>
            <div className="background">
                <img src={bgImage} alt="" />
            </div>

            <div className="prev-image-container" style={{ position: "absolute", top: "3%", left: "2%", display: "inline" }}>
                <div className='progress'>
                    <img src={prevBtnImage} alt="prev-btn-png" style={{ width: "100px" }} onClick={goToPrevPage} />
                    <div className="progress-bar" style={{ left: "140%" }}>
                        <img src={BalnkBanana} alt="" className='blank_banana' />
                    </div>
                </div>

                <div className="timer-container">
                    <h2>Time Remaining : {timer}s</h2>
                </div>


                <div className="card-container">
                    <div className="pink-card-container">

                    </div>
                    <div className="blue-card-container"></div>

                </div>
            </div>
        </div>
    )

}

export default Activity