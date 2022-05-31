import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playVideo } from "../../redux/videoSlice";
import Player from "../Player";
import VideoList from "../VideoList";
import "./videoPlayer.scss";

function VideoPlayer() {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const fetchedVideos = await axios(process.env.REACT_APP_GET_VIDEOS);
        const videoList = fetchedVideos.data;

        setVideos(videoList);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  useEffect(() => {
    videos.length > 0 && dispatch(playVideo(videos[0]));
  });

  return (
    <div className="video_player_container">
      <Player />
      <VideoList videos={videos} />
    </div>
  );
}

export default VideoPlayer;
