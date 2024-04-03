import React, { useEffect, useState } from 'react'
import bgImage from '../assets/images/bg1.png'
import prevBtnImage from '../assets/images/back.png'
import BalnkBanana from '../assets/images/blank-banana-2.png'
import pinkImageCard from '../assets/images/pinkCard.png'
import blueImageCard from '../assets/images/blueCard.png'

import appleImage from '../assets/images/apple.png'
import mangoImage from '../assets/images/mango.png'
import orangeImage from '../assets/images/orange.png'
import pineappleImage from '../assets/images/pineapple.png'
import strawberryImage from '../assets/images/strawberry.png'
import bananaImage from '../assets/images/banana.png'

import pinkBlankImage from '../assets/images/plainpinkCard.png'


import './activity.css'

const Activity = ({ goToNextPage, goToPrevPage }) => {
    const [timer, setTimer] = useState(30);

    const [pinkCards, setPinkCard] = useState([
        { frontImage: pinkImageCard, backImage: appleImage },
        { frontImage: pinkImageCard, backImage: mangoImage },
        { frontImage: pinkImageCard, backImage: orangeImage },
        { frontImage: pinkImageCard, backImage: pineappleImage },
        { frontImage: pinkImageCard, backImage: strawberryImage },
        { frontImage: pinkImageCard, backImage: bananaImage },
    ]);

    const [blueCards, setBlueCard] = useState([
        { frontImage: blueImageCard, backImage: appleImage },
        { frontImage: blueImageCard, backImage: bananaImage },
        { frontImage: blueImageCard, backImage: bananaImage },
        { frontImage: blueImageCard, backImage: bananaImage },
        { frontImage: blueImageCard, backImage: bananaImage },
        { frontImage: blueImageCard, backImage: bananaImage },
    ]);

    useEffect(() => {
        let id;
        id = setInterval(() => {

            setTimer(prev => prev - 1);
        }, 1000)
        if (timer <= 0) clearInterval(id);

        return () => clearInterval(id);

    }, [timer]);


    function startGame(e) {
        console.log(e.target)
    }



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

                <div className="timer-container">
                    <h2>Time Remaining : {timer}s</h2>
                </div>
            </div>

            <div className="card-container">
                <div className="pink-card-container">
                    {pinkCards.map((pinkCard, index) => {
                        return (
                            <div className='flip-card-inner' key={index} >
                                <img src={pinkCard.frontImage} alt='pink-card-image' onClick={startGame} />
                            </div>
                        )
                    })}

                </div>

                <div className="pink-card-container">
                    {blueCards.map((blueCard, index) => {
                        return (
                            <div className='flip-card-inner' key={index} >
                                <img src={blueCard.frontImage} alt='pink-card-image' onClick={startGame} />
                                {/* <img src={pinkBlankImage} alt="" />
                                <img src={pinkCard.backImage} alt='pink-card-image' onClick={startGame} /> */}
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )

}

export default Activity