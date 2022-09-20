import React from "react";
import "./NavBarMenu.css";
import NavButtons from "./NavBarButtons";

function NavBarMenu() {
  return (
    <nav className="navBar">
      <nav className="navBar-link-container">
        <NavButtons buttonName={"Home"} />
        <NavButtons buttonName={"Transaction"} />
      </nav>
      <div className="navBar-action-btn-container">
        <ol className="navBar-action-btn">
          {/* <li>
            <button>
              <img
                alt="action icon 1"
                src="/assets/NavButtonsIcons/income.svg"
              ></img>
            </button>
          </li>
          <li>
            <button>
              <img
                alt="action icon 2"
                src="/assets/NavButtonsIcons/currency-exchange.svg"
              ></img>
            </button>
          </li>
          <li>
            <button>
              <img
                alt="action icon 3"
                src="/assets/NavButtonsIcons/expense.svg"
              ></img>
            </button>
          </li> */}
        </ol>
      </div>
      <nav className="navBar-link-container">
        <NavButtons buttonName={"Budget"} />
        <NavButtons buttonName={"Profile"} />
      </nav>
    </nav>
  );
}

export default NavBarMenu;
