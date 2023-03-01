import React from 'react';
import mp4 from '../img/video.mp4'
import webm from '../img/video.webm'


function VideoPlayer() {
  return (
    <video class="bg-video__content" autoplay muted loop>
      <source src={mp4} type="video/mp4" />
      <source src={webm} type="video/webm" />
      Your browser is not supported!

    </video>
  );
}

export default VideoPlayer;
