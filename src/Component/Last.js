import React from "react";
import "../Styling/Last.css";
import world from "../Images/world map.png";
import End from "../Component/End";
import usa from "../Images/usa.png";
import germany from "../Images/germany.png";
import australia from "../Images/australia.png";
import united from "../Images/united kingdom.png";
import isaa from "../Images/israel.png";

const Last = () => {
  return (
    <div className="final">
      <div className="Leftbox">
        <div className="Heading">
          <p className="matter">Global Sales By Top Locations</p>
          <p className="matterr">All products that were shipped</p>
        </div>
        <div>
          <End Img10={usa} Txt10={"USA"} Txt11={"2.920"} Txt12={"53.23%"} />
          <End
            Img10={germany}
            Txt10={"GERMANY"}
            Txt11={"1.300"}
            Txt12={"20.48%"}
          />
          <End
            Img10={australia}
            Txt10={"AUSTRALIA"}
            Txt11={"1234"}
            Txt12={"23.8%"}
          />
          <End
            Img10={united}
            Txt10={"UNITED KINGDOM"}
            Txt11={"760"}
            Txt12={"10.35%"}
          />
          <End Img10={isaa} Txt10={"ISRAEL"} Txt11={"600"} Txt12={"5.94%"} />
        </div>
      </div>
      <div className="Rightbox">
        <img src={world} className="move" />
      </div>
    </div>
  );
};
export default Last;
