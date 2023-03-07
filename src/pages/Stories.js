import React from "react";
import { stories } from "../data";
import Video from '../components/Video'


function Stories() {
  return (
    <section className="section-stories" id='reviews'>
      <Video />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      {stories.map((story) => {
        const { id, img, name, heading, desc } = story;
        return (
          <div key={id} className="row">
            <div className="story">
              <figure className="story__shape">
                <img src={img} alt="person on a tour" className="story__img" />
                <figcaption className="story__caption">{name} </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {heading}
                </h3>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="u-center-text u-margin-top-huge">
        <a href="h" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Stories;
