import React from "react";
import { tours } from "../data";

function TourCards() {
  return (

    <div className="row">

      {tours.map((tour) => {
        const { id, cardPicture, heading, details, cardSideBack } = tour;
        return (
          <div key={id} className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className={`card__picture ${cardPicture}`}>
                  &nbsp;
                </div>
                <div className="card_heading">{heading} </div>
                <div className="card_details">{details}</div>

              </div>
              <div className={`card__side card__side--back ${cardSideBack}`}>BACK</div>


            </div>
          </div>

        )
      })}







    </div >

  )
}

export default TourCards;
