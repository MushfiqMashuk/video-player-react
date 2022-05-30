import axios from "axios";
import React, { useEffect, useState } from "react";
import Player from "../Player";
import VideoList from "../VideoList";
import "./videoPlayer.scss";

function VideoPlayer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const fetchedVideos = await axios("http://localhost:4000/videos");
        const videoList = fetchedVideos.data;

        console.log(videoList);

        setVideos(videoList);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  return (
    <div className="video_player_container">
      <Player />
      <VideoList videos={videos} />
    </div>
  );
}

export default VideoPlayer;
