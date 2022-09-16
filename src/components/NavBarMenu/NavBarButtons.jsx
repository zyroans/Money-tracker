import React from "react";
import "./NavBarMenu.css";

function NavBarButtons(props) {
  return (
    <button className="navBar-link">
      <img
        alt={`${props.buttonName} icon`}
        src={`/assets/NavButtonsIcons/${props.buttonName.toLowerCase()}.svg`}
        className="navBar-link-img"
      />
      <p className="navBar-link-txt">{props.buttonName}</p>
    </button>
  );
}

export default NavBarButtons;
