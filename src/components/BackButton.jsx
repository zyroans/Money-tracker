import { useNavigate } from "react-router-dom";
import React from "react";

function BackButton() {
  let history = useNavigate();

  function handleClick() {
    history.push("/");
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
