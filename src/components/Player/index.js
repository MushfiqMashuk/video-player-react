import React from "react";
import { useSelector } from "react-redux";
import "./player.scss";

function Player() {
  const videoTitle = useSelector((state) => state.nowPlaying.title);
  return <div className="player_container">{videoTitle}</div>;
}

export default Player;
