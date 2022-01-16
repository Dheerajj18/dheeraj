import React from "react";
import "../Styling/Properties.css";

const Properties = ({ txt1, txt2, txt3 }) => {
  return (
    <div className="box">
      <div className="ok">
        <p className="height">{txt1}</p>
      </div>
      <div className="info">
        <p className="width">{txt2}</p>
        <p className="width">{txt3}</p>
      </div>
    </div>
  );
};
export default Properties;
