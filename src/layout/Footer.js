import React from "react";
import { footerLinks } from "../data";
import footerLogo1x from "../img/logo-green-1x.png"
import footerLogo2x from "../img/logo-green-2x.png"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">


        <picture className="footer__logo">
          <source
            srcSet={`${footerLogo1x} 1x,
              ${footerLogo2x} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${footerLogo1x} 1x,
             ${footerLogo2x} 2x`}
            alt="Full logo" src={footerLogo2x}
            className="footer__img"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {footerLinks.map((link) => {
                const { id, href, text } = link;
                return (
                  <li key={id} className="footer__item">
                    <a href={href} className="footer__link">
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">
            This project is developed by &nbsp;
            <a href="#footer" className="footer__link">
              Laura Telqiu
            </a>
            &nbsp; for educational purposes, with the guidance and support of the Advanced CSS and Sass Udemy course, instructed by Jonas Schmedtmann.
          </p>


        </div>
      </div>
    </footer>
  );
}

export default Footer;

