import '../sass/main.css'
import React from 'react';
import nat1 from '../img/nat-1.jpg'
import natLarge1 from '../img/nat-1-large.jpg'
import nat2 from "../img/nat-2.jpg"
import natLarge2 from '../img/nat-2-large.jpg'
import nat3 from '../img/nat-3.jpg'
import natLarge3 from '../img/nat-3-large.jpg'



function AboutImages() {
  return (

    <div className="col-1-of-2">
      <div className="composition">
        <img srcSet={`${nat1} 300w, ${natLarge1} 1000w`}

          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          alt="Nat-1"
          className="composition__photo composition__photo--p1"
          src="img/nat-1-large.jpg" />

        <img srcSet={`${nat2} 300w, ${natLarge2} 1000w`}
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          alt="Nat-2"
          className="composition__photo composition__photo--p2"
          src="img/nat-2-large.jpg" />

        <img srcSet={`${nat3} 300w, ${natLarge3} 1000w`}
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          alt="Nat-3"
          className="composition__photo composition__photo--p3"
          src="img/nat-3-large.jpg" />
      </div>
    </div>




    // <div className="col-1-of-2">
    //   <div className="composition">

    //     <img src={nat1} alt="image1" className="composition__photo composition__photo--p1" />
    //     <img src={nat2} alt="image2" className="composition__photo composition__photo--p2" />
    //     <img src={nat3} alt="image3" className="composition__photo composition__photo--p3" />
    //   </div>


    // </div>
  )
}

export default AboutImages;
