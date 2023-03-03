import React from 'react'
import mp4 from '../img/video.mp4'
import webm from '../img/video.webm'

function Video() {
  return (
    <div className="bg-video">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
    </div>

  )
}

export default Video









