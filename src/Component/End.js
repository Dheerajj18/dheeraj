import React from "react";
import "../Styling/End.css";
const End = ({ Img10, Txt10, Txt11, Txt12 }) => {
  return (
    <div className="Middlebox">
      <div className="leftmini">
        <img src={Img10} className="flags" />
        <p>{Txt10}</p>
      </div>
      <div className="rightmini">
        <p className="Txt11">{Txt11}</p>
        <p>{Txt12}</p>
      </div>
    </div>
  );
};
export default End;
