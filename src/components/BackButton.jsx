import { useNavigate } from "react-router-dom";
import React from "react";

function BackButton() {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <>
      <button className="back-btn" onClick={() => handleClick()}>
        <img alt="left-arrow" src="/assets/arrow-left.svg"></img>
      </button>
    </>
  );
}

export default BackButton;
