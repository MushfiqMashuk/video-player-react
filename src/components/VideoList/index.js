import React from "react";
import "./videoList.scss";

function VideoList({ videos }) {
  return (
    <div className="video_list_container">
      <h2>Video List</h2>
      <div className="link_container">
        {videos.map((video) => (
          <div className="link">{video.title}</div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
