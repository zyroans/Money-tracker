import React from "react";
import "../RecentTransactions/RecentTransactions.css";
import TransactionCard from "./TransactionCard";

function RecentTransactions() {
  return (
    <div className="recent-transaction-container">
      <div className="recent-transaction-header-container">
        <h2 className="recent-transaction-header-title">Recent Transaction</h2>
        <button className="recent-transaction-header-btn">See All</button>
      </div>
      <TransactionCard
        title="Almuerzo"
        details="Almuerzo del trabajo"
        value="15000"
      />
      <TransactionCard
        title="Taxi aeropuerto"
        details="Taxi de ida al aeropuerto"
        value="50000"
      />
      <TransactionCard
        title="Regalo amigo secreto"
        details="Compra del amigo secreto de la empresa"
        value="50.000"
      />
    </div>
  );
}

export default RecentTransactions;
