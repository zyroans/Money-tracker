import React from "react";
import "../App.css";
import NavMenu from "../components/NavMenu/NavMenu";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";

function Test() {
  return (
    <div className="home-container" style={{ display: "grid" }}>
      <header></header>
      <main>
        <RecentTransactions />
      </main>
      <footer>
        <NavMenu />
      </footer>
    </div>
  );
}

export default Test;
