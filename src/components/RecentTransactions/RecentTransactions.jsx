import React from "react";
import "../RecentTransactions/RecentTransactions.css";
import TransactionCard from "./TransactionCard";

function RecentTransactions() {
  return (
    <div className="recent-transaction-container">
      <div className="recent-transaction-container-header">
        <h2>Recent Transaction</h2>
        <button>See All</button>
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
    </div>
  );
}

export default RecentTransactions;
