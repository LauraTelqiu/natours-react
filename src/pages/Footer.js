import React from "react";
import { footerLinks } from "../data";
import footerLogo from "../img/logo-green-2x.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src={footerLogo}
          alt="Full logo"
          className="footer__logo"
        />
      </div>
      <div className="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            {footerLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <ul key={id} className="footer__list">
                  <li class="footer__item">
                    <a href={href} class="footer__link">{text}</a>
                  </li>
                </ul>
              )
            })}

          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            This project is developed by
            <a href="#" className="footer__link">
              Laura Telqiu
            </a>
            for educational purposes, with the guidance and support of the
            Advanced CSS and Sass Udemy course, instructed by Jonas Schmedtmann
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from "react";
// import { footerLinks } from "../data";
// import footerLogo from '../img/logo-green-2x.png'

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer__logo-box">
//         <img src={footerLogo} alt="Full logo" className="footer__logo" />

//       </div>
//       <div className="row">
//         <div className="col-1-of-2">
          // <div className="footer__navigation">
          //   {footerLinks.map((link) => {
          //     const { id, href, text } = link;
          //     return (
          //       <ul key={id} className="footer__list">
          //         <li className="footer__item">
          //           <a href={href} className="footer__link">
          //             {text}
          //           </a>
          //         </li>
          //       </ul>
          //     );
          //   })}
          // </div>
// //         </div>
//         <div className="col-1-of-2">
//           <p className="footer__copyright">
//             Built by <a href="#" className="footer__link">Jonas Schmedtmann</a> for
//             his online course
//             <a href="#" className="footer__link">Advanced CSS and Sass</a>.
//             Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
//             this webpage for both personal and commercial use, but NOT to claim
//             it as your own design. A credit to the original author, Jonas
//             Schmedtmann, is of course highly appreciated!
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;
