import React from "react";
import { useState } from "react";
import { DescriptionInfo } from "../utils/SlideInfo";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  let infoSlider = [];
  infoSlider.push(
    new DescriptionInfo(
      "/assets/slide1.svg",
      "Gain total control of your money",
      "Become your own money manager and make every cent count"
    )
  );
  infoSlider.push(
    new DescriptionInfo(
      "/assets/slide2.svg",
      "Know where your money goes",
      "Track your transaction easily, with categories and financial report"
    )
  );
  infoSlider.push(
    new DescriptionInfo(
      "/assets/slide3.svg",
      "Planning ahead",
      "Setup your budget for each category so you in control"
    )
  );
  return (
    <>
      <ul>
        {infoSlider.map((slide, index) => (
          <li
            className={index === currentIndex ? "active" : "inactive"}
            key={index}
          >
            <div className="description-image-container">
              <img src={slide.image} alt="pics" className="description-image" />
            </div>
            <div className="description-container">
              <div className="description-text">
                <h1 className="description-title">{slide.title}</h1>
                <p className="description-paragraph">{slide.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {infoSlider.map((btn, index) => (
          <li key={`b${index}`} className="li-button">
            <button
              className="btn-slide"
              onClick={() => {
                setCurrentIndex(index);
              }}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Slider;
