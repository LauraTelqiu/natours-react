import React from "react";
import { features } from "../data";

function Features() {
  return (
    <section className="section-features" id="benefits">
      <div className="row">
        {features.map((feature) => {
          const { id, icon, title, text } = feature;
          return (
            <div key={id} className="col-1-of-4">
              <div className="feature-box">
                <i className={icon}></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {title}
                </h3>
                <p className="feature-box__text">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
