import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={`button ${this.props.google ? "google" : ""}`}
        onClick={this.props.action}
      >
        <img alt="" src={this.props.image}></img>
        {this.props.text}
      </button>
    );
  }
}
