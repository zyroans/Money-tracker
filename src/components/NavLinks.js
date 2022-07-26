import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Button extends Component {
  render() {
    return (
      <Link to={this.props.URL}>
        <button className="button">{this.props.text}</button>
      </Link>
    );
  }
}
