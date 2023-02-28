import React from "react";
import { stories } from "../data";

function Stories() {
  return (
    <section className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people happy</h2>
      </div>

      <div className="row">
        {stories.map((story) => {
          const { id, img, heading, desc } = story;
          return (
            <div key={id} className="story">
              <figure className="story__shape">
                <img src={img} alt="person on a tour" className="story__img" />
              </figure>
              <div class="story__text">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  {heading}
                </h3>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stories;
