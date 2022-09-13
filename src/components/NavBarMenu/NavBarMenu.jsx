import React from "react";
import "./NavBarMenu.css";
import NavButtons from "./NavBarButtons";

function NavBarMenu() {
  return (
    <footer className="navBar">
      <div>
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
