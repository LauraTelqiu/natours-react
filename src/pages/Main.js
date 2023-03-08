import React from 'react'
import Stories from "./Stories"
import About from './About'
import Features from './Features'
import Tours from './Tours'
import Booking from './Booking'
import Popup from '../components/Popup'

function Main() {
  return (
    <div>
      <About />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Popup />
    </div>
  )
}

export default Main
