import React from "react";
import "./VideoItem.css";

function videoItem({ video, selectedVideo }) {
 return (
  <div className='video-content' onClick={() => selectedVideo(video)}>
   <div className='img-wrapper'>
    <img src={video.snippet.thumbnails.medium.url} alt='' />
   </div>
   <h6>{video.snippet.title}</h6>
  </div>
 );
}

export default videoItem;
