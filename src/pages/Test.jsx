import React from "react";

import Form from "../components/Form";
import Button from "../components/Button";
import "../App.css";

export default function Test() {
  const name = React.createRef();
  const email = React.createRef();
  const password = React.createRef();
  function onSubmit() {
    const formFilled = [];
    formFilled.push(`${name.current.name}: ${name.current.value}`);
    formFilled.push(`${email.current.name}: ${email.current.value}`);
    formFilled.push(`${password.current.name}: ${password.current.value}`);
    console.log(
      `Validation has been sent with the following data ${formFilled}`
    );
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
