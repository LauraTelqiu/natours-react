import React from 'react'
import { navLinks } from './data'

function Navigation() {
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
      <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon">Menu</span>
      </label>

      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          {navLinks.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id} class="navigation__item">
                <a href={href} class="navigation__link">{text}</a>
              </li>

            )
          })}
        </ul>


      </nav>
    </div>
  )
}

export default Navigation
