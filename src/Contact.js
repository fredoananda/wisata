import React, { useState } from "react";
import "./Contact.css";

const Clock = () => {
  let Time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(Time);

  const updateTime = () => {
    let Time = new Date().toLocaleTimeString();
    setCurrentTime(Time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="scrollable main-container" id="contact">
      <div className="containerwrap1">
        <div className="content-wrapper green">
          <div className="description">
            <h1>{currentTime}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
