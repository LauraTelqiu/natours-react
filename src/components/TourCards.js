import React from "react";
import { tours } from "../data";

function TourCards() {
  return (
    <div className="row">
      {tours.map((tour) => {
        const { id, title } = tour;
        return (
          <div key={id} className="col-1-of-3">
            {title}
          </div>
        );
      })}
    </div>
  );
}

export default TourCards;
