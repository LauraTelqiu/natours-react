import React from "react";
import { tours } from "../data";

function TourCards() {
  return (

    <div className="row">

      {tours.map((tour) => {
        const { id, cardPicture, heading, span, price, length, capacity, guides, sleep, difficulty, cardSideBack } = tour;
        return (
          <div key={id} className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className={`card__picture ${cardPicture}`}>
                  &nbsp;
                </div>

                <h4 className="card__heading">
                  <span className={`card__heading-span ${span}`}
                  >{heading}</span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li>{length}</li>
                    <li>{capacity}</li>
                    <li>{guides}</li>
                    <li>{sleep}</li>
                    <li>{difficulty}</li>
                  </ul>
                </div>
              </div>
              <div className={`card__side card__side--back ${cardSideBack}`}>
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">${price}</p>
                  </div>
                  <a href="http" className="btn btn--white">Book now!</a>
                </div>
              </div>


            </div>
          </div>

        )
      })}







    </div >

  )
}

export default TourCards;
