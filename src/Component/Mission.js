import React from "react";
import "../Styling/Mission.css";
import Copyright from "../Images/logo.png";
const Mission = () => {
  return (
    <div className="box">
      <h1 className="text1">THIS IS MY BANNER TEXT</h1>

      <ul>
        <li>
          <a href=""> HOME</a>
        </li>

        <li>
          <a href=""> LIST</a>
        </li>

        <li>
          {" "}
          <a href=""> CONTACT</a>
        </li>

        <li>
          <a href=""> HUBPAGES</a>
        </li>
      </ul>

      <h2>THIS IS MY PARAGRAPH HEADER</h2>
      <p className="Bottom_text">
        This is where i am going to put useful and informative text about
        mywebsite.
      </p>
      <p className="Bottom_text">
        This is where i can place even more information about my website.
      </p>
      <div className="Bottom_container">
        <p>This is where i can place a copyright logo like this</p>
        <img src={Copyright} className="Image" />
      </div>
    </div>
  );
};

export default Mission;
