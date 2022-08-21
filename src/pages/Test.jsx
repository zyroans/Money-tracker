import React from "react";
import Form from "../components/Form";
import "../App.css";

export default function Test() {
  return (
    <div className="home-container">
      <h1>Test</h1>
      <form className="forms-container">
        <Form type={"text"} className={"forms"} name={"Name"} />
        <Form className={"forms"} type={"email"} name={"Email"} />
        <Form
          className={"forms"}
          type={"password"}
          name={"Password"}
          minLength={4}
        />
      </form>
    </div>
  );
}
