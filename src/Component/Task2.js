import React from "react";
import "../Styling/Task2.css";
import profile from "../Images/profile.png";
import email from "../Images/email.png";
import password from "../Images/password.png";

const Task2 = () => {
  return (
    <div className="first">
      <div className="second">
        <div className="third">
          <img src={profile} className="image" />
        </div>
        <div className="fourth">
          <h1>User Login</h1>
          <div className="seventh">
            <img src={email} className="pic" />
            <input placeholder="Email Id" className="Textinput" />
          </div>
          <div className="seventh">
            <img src={password} className="pic" />

            <input placeholder="Password" className="Textinput" />
          </div>

          <div className="sixth">
            <button className="bottom">
              <p>Login</p>
            </button>
            <p>Forgot Username/Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task2;
