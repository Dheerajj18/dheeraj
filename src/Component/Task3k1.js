import React from "react";
import "../Styling/Task3k1.css";
import arrowdw from "../Images/arrow.png";

const Task3k1 = ({ Img1, Txt }) => {
  return (
    <div className="Main">
      <img src={Img1} className="Icon" />
      <p className="Textt">{Txt}</p>

      <img src={arrowdw} className="arrowdw" />
    </div>
  );
};

export default Task3k1;
