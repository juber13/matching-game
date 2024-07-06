/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import prevBtnImage from "../assets/images/back.png";
import BalnkBanana from "../assets/images/blank-banana-2.png";

import appleImage from "../assets/images/apple.png";
import mangoImage from "../assets/images/mango.png";
import orangeImage from "../assets/images/orange.png";
import pineappleImage from "../assets/images/pineapple.png";
import strawberryImage from "../assets/images/strawberry.png";
import bananaImage from "../assets/images/banana.png";

import "./activity.css";

const Activity = ({ goToPrevPage }) => {
  const [timer, setTimer] = useState(30);
  const [counter, setCounter] = useState(0);
  const [totalBanana, setTotalBanana] = useState(0);
  const [cardValue, setCardValue] = useState(null);
  const [barWidth, setBarWidth] = useState(16.67);
  const myRef = useRef(null);
  const navigate = useNavigate();

  console.log(myRef);

  const [pinkCards] = useState([
    { value: "apple", backImage: appleImage },
    { value: "mango", backImage: mangoImage },
    { value: "orange", backImage: orangeImage },
    { value: "pineapple", backImage: pineappleImage },
    { value: "strawberry", backImage: strawberryImage },
    { value: "banana", backImage: bananaImage },
  ]);

  const [blueCards] = useState([
    { value: "orange", backImage: orangeImage },
    { value: "pineapple", backImage: pineappleImage },
    { value: "strawberry", backImage: strawberryImage },
    { value: "apple", backImage: appleImage },
    { value: "mango", backImage: mangoImage },
    { value: "banana", backImage: bananaImage },
  ]);

  const handlePinkCard = e => {
    if (counter === 0) {
      e.target.parentElement.classList.add("active");
      setCardValue(e.target.parentElement);
      setCounter(1);
    } else {
      return;
    }
  };

  const handleBlueCard = e => {
    if (counter === 1) {
      const blueCardParent = e.target.parentElement;
      if (blueCardParent) {
        blueCardParent.classList.add("active");
      }

      if (
        e.target.getAttribute("data-text") ===
        cardValue.children[0].getAttribute("data-text")
      ) {
        myRef.current.style.width = barWidth + "%";
        myRef.current.classList.add("active-bar");
        e.target.parentElement.classList.add("hide");
        cardValue.classList.add("hide");
        setBarWidth(barWidth + 16.67);
        setTotalBanana(totalBanana + 1);
        setCounter(0);
      } else {
        setTimeout(() => {
          blueCardParent.classList.remove("active");
          cardValue.classList.remove("active");
          setCounter(0);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    let id;
    id = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    if (timer <= 0) {
      clearInterval(id);
      navigate("/result");
    }

    return () => clearInterval(id);
  }, [timer]);

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
          <div className='progress-container'>
            <div className='progress-bar'>
              <div className='bar' ref={myRef}></div>
            </div>
            <img src={BalnkBanana} alt='' className='blank_banana' />
          </div>
        </div>

        <div className='timer-container'>
          <h2>Time Remaining : {timer}s</h2>
        </div>
      </div>

      {/* card containers */}

      <div className='card-container'>
        <div className='pink-card-container'>
          {pinkCards.map((pinkCard, index) => {
            return (
              <div
                className='flip-card-inner thecard'
                key={index}
                onClick={handlePinkCard}
              >
                <div
                  className='front-card pink'
                  data-text={pinkCard.value}
                ></div>
                <div className='back-card'>
                  <img src={pinkCard.backImage} width={50} alt='' />
                </div>
              </div>
            );
          })}
        </div>

        <div className='pink-card-container'>
          {blueCards.map((blueCard, index) => {
            return (
              <div
                className='flip-card-inner thecard'
                key={index}
                onClick={handleBlueCard}
              >
                <div
                  className='front-card blue'
                  data-text={blueCard.value}
                ></div>
                <div className='back-card'>
                  <img src={blueCard.backImage} width={50} alt='' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activity;
