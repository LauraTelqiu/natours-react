import React from "react";
import { footerLinks } from "../data";
import footerLogo from '../img/logo-green-2x.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={footerLogo} alt="Full logo" className="footer__logo" />

      </div>
      <div className="row">
        {/* <div className="col-1-of-2"> */}
        <div className="footer__navigation">
          {footerLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <ul key={id} className="footer__list">
                <li className="footer__item">
                  <a href={href} className="footer__link">
                    {text}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
