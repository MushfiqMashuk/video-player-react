import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import "./player.scss";

function Player() {
  const currentVideo = useSelector((state) => state.nowPlaying);

  return (
    <div className="player_container">
      <ReactPlayer
        controls
        url={currentVideo.url}
        className="player"
        width="100%"
        height="100%"
        onError={() => {
          alert("Error Playing the Video!");
        }}
      />
    </div>
  );
}

export default Player;
