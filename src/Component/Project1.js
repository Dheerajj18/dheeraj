import React, { useState } from "react";
import "../Styling/Project1.css";
import Pizza from "../Images/download.png";

const Project1 = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="Container">
      <img src={Pizza} className="pizza" />

      <h1 className="Styling">Pizza Order Counter</h1>
      <div className="Header">
        <h1 className="Css">{count}</h1>
      </div>
      <button onClick={Increment} className="button">
        Take Order
      </button>
      <button onClick={() => setCount(count - 1)} className="button">
        Cancel Order
      </button>
    </div>
  );
};
export default Project1;
