import React from "react";
import "./NavBarMenu.css";
import NavButtons from "./NavBarButtons";

function NavBarMenu() {
  return (
    <footer className="navBar">
      <div className="navBar-action-btn-container">
        <ol className="navBar-action-btn">
          <li>
            <button>
              <img alt="action icon 1" src=""></img>
            </button>
          </li>
          <li>
            <button>
              <img alt="action icon 2" src=""></img>
            </button>
          </li>
          <li>
            <button>
              <img alt="action icon 3" src=""></img>
            </button>
          </li>
        </ol>
      </div>
      <nav className="navBar-link-container">
        <NavButtons buttonName={"Home"} />
        <NavButtons buttonName={"Transaction"} />
        <NavButtons buttonName={"Budget"} />
        <NavButtons buttonName={"Profile"} />
      </nav>
    </footer>
  );
}

export default NavBarMenu;
