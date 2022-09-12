import React from "react";
import "./NavBarMenu.css";

function NavBarButtons(props) {
  return (
    <button className="navBar-btn">
      <img
        alt={`${props.butonName} icon`}
        src="/public/assets/NavButtonsIcons/home.svg"
        className="navBar-btn-img"
      />
      <p className="navBar-btn-txt">{props.butonName}</p>
    </button>
  );
}

export default NavBarButtons;
