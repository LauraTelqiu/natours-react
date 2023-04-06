import React, { useState } from "react";
import Popup from "../components/Popup";
import TourCards from "../components/TourCards";
import { tours } from "../data";

function Tours() {
  const [displayTourPopup, setDisplayTourPopup] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const onTourSelection = (tour) => {
    setDisplayTourPopup(true);
    setSelectedTour(tour);
  };

  return (
    <>
      <section className="section-tours" id="tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Most popular tours</h2>
        </div>
        <TourCards tours={tours} onTourSelection={onTourSelection} />
        <div className="u-center-text u-margin-top-huge">
          <a href="#tours" className="btn btn--green">
            Discover all tours
          </a>
        </div>
      </section>
      <div>
        {displayTourPopup && (
          <Popup
            selectedTour={selectedTour}
            onClose={() => setDisplayTourPopup(false)}
          />
        )}
      </div>
    </>
  );
}

export default Tours;
