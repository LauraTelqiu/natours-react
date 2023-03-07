import React from 'react'
import TourCards from '../components/TourCards'

function Tours() {
  return (
    <section className="section-tours" id="tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Most popular tours
        </h2>
      </div>
      <TourCards />
      <div className="u-center-text u-margin-top-huge">
        <a href="http" className="btn btn--green">Discover all tours</a>
      </div>
    </section>
  )
}

export default Tours
