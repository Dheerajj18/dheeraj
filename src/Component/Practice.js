import React from "react";
import "../Styling/Practice.css";

const Practice = () => {
  return (
    <div className="first">
      <div className="second">
        <div className="third">
          <h1>Sign in</h1>
          <p>or use your account</p>

          <input placeholder="Email" className="Textinput" />
          <input placeholder="Password" className="Textinput" />

          <p> Forgot your password?</p>
          <button className="word">
            <p>SIGN IN</p>
          </button>
        </div>

        <div className="fourth">
          <h1>Hello,friends!</h1>
          <p>If you are a hot chick then continue your journey with me.</p>
          <p>call my manager m.k</p>
          <button className="key">
            <p>SIGN UP</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Practice;
