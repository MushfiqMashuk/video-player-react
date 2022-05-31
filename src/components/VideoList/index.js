import React from "react";
import { useDispatch } from "react-redux";
import { playVideo } from "../../redux/videoSlice";
import "./videoList.scss";

function VideoList({ videos }) {
  const dispatch = useDispatch();

  const handlePlay = (video) => {
    dispatch(playVideo(video));
  };

  return (
    <div className="video_list_container">
      <h2>Video List</h2>
      <div className="link_container">
        {videos.map((video) => (
          <div className="link" onClick={() => handlePlay(video)}>
            {video.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
