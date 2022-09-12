import React from "react";
import "./NavBarMenu.css";
import NavButtons from "./NavBarButtons";

function NavBarMenu() {
  return (
    <footer className="navBar">
      <div>
        <button></button>
      </div>
      <nav className="navBar-container">
        <NavButtons butonName={"Home"} />
        <NavButtons butonName={"Transaction"} />
        <NavButtons butonName={"Budget"} />
        <NavButtons butonName={"Profile"} />
      </nav>
    </footer>
  );
}

export default NavBarMenu;
