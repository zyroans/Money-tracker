import React from "react";
import "./NavBarMenu.css";

function NavBarButtons(props) {
  return (
    <button className="navBar-btn">
      <img
        alt={`${props.buttonName} icon`}
        src={`/assets/NavButtonsIcons/${props.buttonName.toLowerCase()}.svg`}
        className="navBar-btn-img"
      />
      <p className="navBar-btn-txt">{props.buttonName}</p>
    </button>
  );
}

export default NavBarButtons;
