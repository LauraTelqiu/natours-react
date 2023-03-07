/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { footerLinks } from "../data";
import footerLogo from "../img/logo-green-2x.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={footerLogo} alt="Full logo" className="footer__logo" />
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
            <a href="#" className="footer__link">
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

