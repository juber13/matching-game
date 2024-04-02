import React, { useEffect, useState } from 'react'
import bgImage from '../assets/images/bg1.png'
import playBtnImage from '../assets/images/play.png'
import prevBtnImage from '../assets/images/back.png'
import BalnkBanana from '../assets/images/blank-banana-2.png'

import StawberryCardImage from '../assets/images/applePink.png'
import StawberryCardImage_3 from '../assets/images/groupCard_pink_blue.png'
import blueCardImage from '../assets/images/blueCard.png'
import NumberImageOne from '../assets/images/1.png'
import NumberImageTwo from '../assets/images/2.png'
import NumberImageThree from '../assets/images/3.png'
import pinkCardImage from '../assets/images/pinkCard (1).png'

const Instructions = ({ goToNextPage, goToPrevPage }) => {
    
    return (
        <div className='home-container'>
            <div className="background">
                <img src={bgImage} alt="" />
            </div>

            <div className="prev-image-container" style={{ position: "absolute", top: "3%", left: "2%", display: "inline" }}>
                <div className='progress'>
                    <img src={prevBtnImage} alt="prev-btn-png" style={{ width: "100px" }} onClick={goToPrevPage} />
                    <div className="progress-bar">
                        <img src={BalnkBanana} alt="" className='blank_banana' />
                    </div>
                </div>
            </div>



            <div className="cards monkey-image-container flex" >
                <div className="card">
                    <div>
                        <img src={StawberryCardImage} alt="" width={"200px"} style={{ position: "relative", zIndex: "2", left: "5%" }} />
                        <img src={pinkCardImage} alt="" width={"200px"} style={{ position: "absolute", left: "5%" }} />
                    </div>

                    <div className="desctioption flex">
                        <img src={NumberImageOne} alt="" width={"50px"} />

                        <div className="text">
                            <h2>Select a <br />Pink card.</h2>
                            <p>It has images.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={blueCardImage} alt="" width={"200px"} />

                    <div className="desctioption flex">
                        <img src={NumberImageTwo} alt="" width={"50px"} />

                        <div className="text">
                            <h3>Select a <br />blue card.</h3>
                            <p>It has alphabets.</p>
                        </div>
                    </div>

                </div>
                <div className="card">
                    <img src={StawberryCardImage_3} alt="" width={"250px"} />

                    <div className="desctioption flex">
                        <img src={NumberImageThree} alt="" width={"50px"} />

                        <div className="text">
                            <p>If they’re the <br />same</p>
                            <h3>It's a match!</h3>
                            <p>It has images.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="start-btn-container">
                <img src={playBtnImage} alt="start-btn-png" width={"230px"} style={{ cursor: "pointer" }} onClick={goToNextPage} />
            </div>
        </div>
    )
}

export default Instructions