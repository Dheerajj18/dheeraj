import React from "react";
import "../Styling/Task3k2.css";

const Task3k2 = ({ Img1, Txt1, Txt2, Img2, Txt3 }) => {
  return (
    <div className="Box">
      <div className="update">
        <img src={Img1} className="boxes" />
        <div className="pan">
          <p>{Txt1}</p>
          <p className="upper">{Txt2}</p>
        </div>
      </div>
      <div className="follow">
        <img src={Img2} className="boxess" />
        <p className="pallo">{Txt3}</p>
      </div>
    </div>
  );
};
export default Task3k2;
