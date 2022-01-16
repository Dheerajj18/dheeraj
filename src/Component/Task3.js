import React from "react";
import "../Styling/Task3.css";
import logo from "../Images/native logo.png";
import Task3k1 from "../Component/Task3k1";
import andrew from "../Images/kendal.jfif";
import two from "../Images/dashboard.png";

import three from "../Images/component.png";
import five from "../Images/form.png";
import six from "../Images/table.png";
import seven from "../Images/map.png";
import eight from "../Images/chart.png";
import nine from "../Images/calendar.png";
import ten from "../Images/puzzle.png";
import option from "../Images/option.jfif";
import search from "../Images/search logo.png";

import Task3k2 from "../Component/Task3k2";
import planet from "../Images/planet.png";
import arroww from "../Images/arrow downward.png";
import bell from "../Images/belll.png";
import arrowww from "../Images/arrow downward.png";
import optionn from "../Images/ooption.png";
import arrowwww from "../Images/arrow downward.png";
import poki from "../Images/poko.png";
import tor from "../Images/torch.jfif";
import robo from "../Images/robot.png";
import heart from "../Images/heart.png";
import refresh from "../Images/refresh.jfif";
import calin from "../Images/calendaar.png";
import clock from "../Images/clock.png";
import refreshh from "../Images/refresh.jfif";
import Last from "../Component/Last";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const Task3 = () => {
  return (
    <div className="first">
      <div className="second">
        <div className="second_img">
          <div className="Header">
            <img src={logo} className="photo" />
            <p>CREATIVE TIM</p>
          </div>
          <div className="border"></div>

          <div className="name">
            <Task3k1 Img1={andrew} Txt={"KENDAL JENNER"} />
          </div>
          <Task3k1 Img1={two} Txt={"DASHBOARD"} />
          <Task3k1 Img1={three} Txt={"COMPONENT"} />
          <Task3k1 Img1={five} Txt={"FORMS"} />
          <Task3k1 Img1={six} Txt={"TABLES"} />
          <Task3k1 Img1={seven} Txt={"MAPS"} />
          <Task3k1 Img1={eight} Txt={"CHARTS"} />
          <Task3k1 Img1={nine} Txt={"CALENDAR"} />
          <Task3k1 Img1={ten} Txt={"PAGES"} />
        </div>
      </div>

      <div className="third">
        <div className="fourth">
          <img src={option} className="button" />
          <NotificationsNoneIcon color="disabled" />

          <p>buttons</p>
          <img src={search} className="search" />

          <p className="aside">search...</p>

          <img src={planet} className="okay" />
          <img src={arroww} className="okay" />
          <img src={bell} className="okay" />
          <img src={arrowww} className="okay" />
          <img src={optionn} className="okay" />
          <img src={arrowwww} className="okay" />
        </div>
        <div className="five">
          <Task3k2
            Img1={poki}
            Txt1={"Number"}
            Txt2={"150GB"}
            Img2={refresh}
            Txt3={"Update Now"}
          />
          <Task3k2
            Img1={tor}
            Txt1={"Revenue"}
            Txt2={"$1,345"}
            Img2={calin}
            Txt3={"Last day"}
          />

          <Task3k2
            Img1={robo}
            Txt1={"Errors"}
            Txt2={"23"}
            Img2={clock}
            Txt3={"in the last hour"}
          />
          <Task3k2
            Img1={heart}
            Txt1={"Followers"}
            Txt2={"+45k"}
            Img2={refreshh}
            Txt3={"Update Now"}
          />
        </div>
        <div className="six">
          <Last />
        </div>
      </div>
    </div>
  );
};
export default Task3;
