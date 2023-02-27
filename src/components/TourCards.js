import React from "react";
import { tours } from "../data";

function TourCards() {
  return (

    <div className="row">

      {tours.map((tour) => {
        const { id, cardPicture, heading, span, length, capacity, guides, sleep, diffculty, cardSideBack } = tour;
        return (
          <div key={id} className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className={`card__picture ${cardPicture}`}>
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className={`card__heading-span ${span}`}
                  >{heading}</span
                  >
                </h4>
                <div className="card__details">
                  <ul>
                    <li>{length}</li>
                    <li>{capacity}</li>
                    <li>{guides}</li>
                    <li>{sleep}</li>
                    <li>{diffculty}</li>
                  </ul>
                </div>

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
