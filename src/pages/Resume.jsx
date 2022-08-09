import React from "react";
import AccountBalance from "../components/AccountBalance";

function Resume() {
  return (
    <div className="home-container">
      <div className="resume-container">
        <div className="resume-header">
          <img alt="profile pic" src="/assets/notifiaction.svg"></img>
          <h2>Month</h2>
          <div>notificacion</div>
        </div>
        <AccountBalance
          balance="9400"
          incomeMoney="5000"
          expensesMoney="1200"
        />
      </div>
    </div>
  );
}

export default Resume;
