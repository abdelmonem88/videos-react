import React from "react";

function VideoDetails({ selectedVideo }) {
 if (!selectedVideo) {
  return (
   <div>
    <h4>Loading...</h4>
   </div>
  );
 }
 return (
  <div>
   <iframe
    width='100%'
    height='350'
    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
    title='YouTube video player'
    frameBorder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
   ></iframe>
   <h4 className='my-3'>{selectedVideo.snippet.title}</h4>
  </div>
 );
}

export default VideoDetails;
