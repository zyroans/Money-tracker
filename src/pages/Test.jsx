import React from "react";

import Form from "../components/Form";
import Button from "../components/Button";
import "../App.css";

export default function Test() {
  const name = React.createRef();
  const email = React.createRef();
  const password = React.createRef();
  function onSubmit() {
    console.log("Validation has been sent with the following data");
    console.log(`${name.current.name}: ${name.current.value}`);
    console.log(`${email.current.name}: ${email.current.value}`);
    console.log(`${password.current.name}: ${password.current.value}`);
  }

  return (
    <div className="home-container">
      <h1>Test</h1>
      <form className="forms-container">
        <Form type={"text"} className={"forms"} name={"Name"} ref={name} />
        <Form className={"forms"} type={"email"} name={"Email"} ref={email} />
        <Form
          className={"forms"}
          type={"password"}
          name={"Password"}
          minLength={4}
          ref={password}
        />
      </form>
      <Button text={"Sign Up"} action={onSubmit} />
    </div>
  );
}
