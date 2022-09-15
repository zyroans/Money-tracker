import React from "react";
import "../App.css";
import NavBarMenu from "../components/NavBarMenu/NavBarMenu";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

function Test() {
  return (
    <div className="home-container" style={{ display: "grid" }}>
      <header></header>
      <main>
        <RecentTransactions />
      </main>
      <footer>
        <NavBarMenu />
      </footer>
    </div>
  );
}

export default Test;
