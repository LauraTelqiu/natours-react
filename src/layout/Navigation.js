import React, { useState } from 'react'
import { navLinks } from '../data'

function Navigation() {
  const [showNav, setShowNav] = useState(false)

  const handleLinkClick = () => {
    setShowNav(false)
  }

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" checked={showNav} onChange={() => setShowNav(!showNav)} />
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {navLinks.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id} className="navigation__item">
                <a href={href} className="navigation__link" onClick={handleLinkClick}>{text}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
