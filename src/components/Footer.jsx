import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <a href="#linldd" className="logo">
              Woodex
            </a>

            <ul>
              <li className="footer-list-item">
                <ion-icon name="location-sharp" aria-hidden="true"></ion-icon>

                <address className="address">Woodex, Chicago, USA 2022</address>
              </li>

              <li className="footer-list-item">
                <ion-icon name="call-sharp" aria-hidden="true"></ion-icon>

                <a href="tel:+1234567890" className="footer-link">
                  +1234567890
                </a>
              </li>

              <li>
                <ul className="social-list">
                  <li>
                    <a href="#linldd" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#linldd" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#linldd" className="social-link">
                      <ion-icon name="logo-tumblr"></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Help & Information</p>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                Help & Contact Us
              </a>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                Returns & Refunds
              </a>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                Online Stores
              </a>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                Terms & Conditions
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">About Us</p>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                What We Do
              </a>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                FAQ Page
              </a>
            </li>

            <li>
              <a href="#linldd" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Newsletter</p>

            <form action="" className="footer-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email address"
                required
                className="email-field"
              />

              <button type="submit" className="footer-form-btn">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </form>

            <div className="wrapper">
              <a href="#linldd" className="footer-link">
                Term & Condition
              </a>
              <a href="#linldd" className="footer-link">
                Policy
              </a>
              <a href="#linldd" className="footer-link">
                Map
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2022 All Rights Reserved by
            <a href="#linldd" className="copyright-link">
              codewithsadee
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
