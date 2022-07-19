import React from "react";
import Button from "../components/Button";

function SingUp() {
  return (
    <div>
      <div>
        <h1>Sign Up</h1>
      </div>
      <input placeholder="Name" type={"text"}></input>
      <input placeholder="Email" type={"email"}></input>
      <input placeholder="Password" type={"password"}></input>
      <div>
        <input type={"checkbox"}></input>
        <p>By signing up, you agree to the</p>
        <a href="https://www.google.com">
          Terms of Servicer and Privacy Policy
        </a>
      </div>
      <Button text={"Sign Up"} />
      <p>Or whit</p>
      <Button text={"Sign Up with Google"} />
    </div>
  );
}

export default SingUp;
