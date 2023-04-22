import "./Body.css";
import React from "react";

function VideoPlayer(props) {
  return (
    <div className="scrollable main-container" id="home">
      <div className="containerwrap black">
        <div className="content-wrapper">
          <div className="description">
            <div className="video-container">
              <video autoPlay loop muted className="video">
                <source src={props.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
