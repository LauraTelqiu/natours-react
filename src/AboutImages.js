import React from 'react';
import nat1 from './img/nat-1.jpg'
import nat2 from "./img/nat-2.jpg"
import nat3 from "./img/nat-3.jpg"


function AboutImages() {
  return (
    <div className="composition">

      <img src={nat1} alt="image1" className="composition__photo composition__photo--p1" />
      <img src={nat2} alt="image2" className="composition__photo composition__photo--p2" />
      <img src={nat3} alt="image3" className="composition__photo composition__photo--p3" />
    </div>
  )
}

export default AboutImages;
