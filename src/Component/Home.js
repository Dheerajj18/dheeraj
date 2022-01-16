import React from "react";
import "../Styling/Home.css";
import girl from "../Images/Girl.jfif";
import star from "../Images/Star.png";
import Properties from "./Properties";

const Home = () => {
  return (
    <div className="Head">
      <div className="Head_sub">
        <div className="flex">
          <div className="Image">
            <img src={girl} className="bae" />
          </div>
          <div className="Textile">
            <div className="fonts">
              <p className="font">Home</p>
              <p className="font">Work</p>
              <p className="font">About</p>
              <p className="font">Contact</p>
              <img src={star} className="pic" />
            </div>
            <p className="alee">Aleena Edinson </p>

            <h1 className="style">Product</h1>
            <h1 className="styles">Designer Based</h1>
            <h1 className="styles">in Manhattan</h1>
            <p className="Size">
              To be a product designer is so amazing.I can help everyone{" "}
            </p>
            <p className="Size">
              buil their bussiness, it such a happiness for me to{" "}
            </p>
            <p className="Size">help you!</p>
            <button className="button">
              <p>My Story</p>
            </button>
          </div>
        </div>
        <div className="prop">
          <Properties txt1={"4"} txt2={"Years"} txt3={"Experience"} />
          <Properties txt1={"94"} txt2={"Satisfied"} txt3={"Clients"} />
          <Properties txt1={"139"} txt2={"Completed"} txt3={"Projects"} />
          <Properties txt1={"90"} txt2={"Live"} txt3={"Projects"} />
        </div>
      </div>
      <div className="Head_mini">
        <div className="last">
          <h1 className="design">My Portfolio</h1>
          <p className="Design">
            These are my design portfolio. you can check it by yourself
          </p>
          <p className="Design">
            Some of my work have been live . As You can see, I work with
          </p>
          <p className="Design">different styles.</p>
          <div className="cart"></div>
        </div>
        <div className="harry">
          <div className="harry-mini"></div>
          <div className="harry-sub"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
