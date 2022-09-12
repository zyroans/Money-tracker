import React from "react";
import "../NavMenu/NavMenu.css";
import NavButtons from "./NavButtons";

function NavMenu() {
  return (
    <footer className="footer">
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

export default NavMenu;
