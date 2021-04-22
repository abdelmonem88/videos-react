import React from "react";
import VideoItem from "./videoItem";

function VideosList({ videos, selectedVideo }) {
 const videosList = videos.map((video) => {
  return (
   <VideoItem
    key={video.id.videoId}
    video={video}
    selectedVideo={selectedVideo}
   />
  );
 });

 return <div style={{ height: "500px", overflowY: "scroll" }}>{videosList}</div>;
}

export default VideosList;
