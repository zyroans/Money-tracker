import React from "react";
import "../RecentTransactions/RecentTransactions.css";

export default function TransactionCard(props) {
  return (
    <div className="transaction-card">
      <img
        alt="category icon"
        src="/assets/CategoryIcons/recurring-bill.svg"
        className="transaction-categoryIcon"
      />
      <div className="transaction-card-details-container">
        <div className="transaction-card-titleValue-container">
          <h3 className="transaction-title">{props.title}</h3>
          <div className="transaction-value">{`$ ${props.value}`}</div>
        </div>
        <p className="transaction-details">{props.details}</p>
      </div>
    </div>
  );
}
