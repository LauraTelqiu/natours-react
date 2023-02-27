import React from "react";
import { tours } from "../data";

function TourCards() {
  return (

    <div className="row">

      {tours.map((tour) => {
        const { id, frontTitle, backTitle } = tour;
        return (
          <div key={id} className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">{frontTitle}</div>
              <div className="card__side card__side--back card__side--back-1">{backTitle}</div>

            </div>
          </div>

        )
      })}







    </div>

  )
}

export default TourCards;
