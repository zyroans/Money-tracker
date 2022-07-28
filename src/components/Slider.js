import React from "react";

function Slider() {
  let infoSlider = [];
  class descriptionInfo {
    constructor(image, title, text) {
      this.image = image;
      this.title = title;
      this.text = text;
    }
  }
  infoSlider.push(
    new descriptionInfo(
      "../assets/slide1.svg",
      "Gain total control of your money",
      "Become your own money manager and make every cent count"
    )
  );
  infoSlider.push(
    new descriptionInfo(
      "../assets/slide2.svg",
      "Know where your money goes",
      "Track your transaction easily, with categories and financial report"
    )
  );
  infoSlider.push(
    new descriptionInfo(
      "../assets/slide3.svg",
      "Planning ahead",
      "Setup your budget for each category so you in control"
    )
  );

  return (
    <ul>
      {infoSlider.map((slide) => (
        <li>
          <img src={slide.image} alt="pics" />
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Slider;
