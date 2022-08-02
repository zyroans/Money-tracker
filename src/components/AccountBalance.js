import React, { Component } from "react";

export class AccountBalance extends Component {
  render() {
    return (
      <div className="account-balance-container">
        <h3>Account Balance</h3>
        <p>${this.props.balance}</p>
        <div className="account-balance-resume">
          <div className="account-balance-income">
            <img alt="income" src="/assets/Group 222.svg"></img>
            <h4>Income</h4>
            <p>${this.props.incomeMoney}</p>
          </div>
          <div className="account-balance-expenses">
            <img alt="Expenses" src="/assets/Group 223.svg"></img>
            <h4>Income</h4>
            <p>${this.props.expensesMoney}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBalance;
