import React from "react";
import "../RecentTransactions/RecentTransactions.css";

export default function TransactionCard(props) {
  return (
    <div className="transaction-card">
      <img alt="category icon" src="" className="transaction-categoryIcon" />
      <h3 className="transaction-title">{props.title}</h3>
      <div className="transaction-value">{`$ ${props.value}`}</div>
      <p className="transaction-details">{props.details}</p>
    </div>
  );
}
