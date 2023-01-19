import React, { useState } from "react";
const Navebar = () => {
  const [nav, setNav] = useState(false);
  const toggleClick = () => {
    setNav(!nav);
  };
  nav
    ? document.body.classList.add("active")
    : document.body.classList.remove("active");
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <div className="input-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search Anything..."
              className="input-field"
            />

            {/* <SearchOutline aria-hidden="true" /> */}
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </div>

          <a href="#Woodex" className="logo">
            Woodex
          </a>

          <div className="header-action">
            <button className="header-action-btn" aria-label="user">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </button>

            <button className="header-action-btn" aria-label="favorite list">
              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              <span className="btn-badge">0</span>
            </button>

            <button className="header-action-btn" aria-label="cart">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
              <span className="btn-badge">0</span>
            </button>

            <button
              className="header-action-btn"
              aria-label="open menu"
              onClick={toggleClick}
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>
      </header>
      <div className={nav ? "sidebar active" : "sidebar"}>
        <button
          className="nav-close-btn "
          aria-label="close menu"
          onClick={toggleClick}
        >
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>

        <div className="wrapper">
          <ul className="sidebar-list">
            <li>
              <p className="sidebar-list-title">Language</p>
            </li>

            <li>
              <a href="#Woodex" className="sidebar-link">
                English
              </a>
            </li>

            <li>
              <a href="#Woodex" className="sidebar-link">
                French
              </a>
            </li>

            <li>
              <a href="#Woodex" className="sidebar-link">
                Arabric
              </a>
            </li>
          </ul>

          <ul className="sidebar-list">
            <li>
              <p className="sidebar-list-title">Currency</p>
            </li>

            <li>
              <a href="#Woodex" className="sidebar-link">
                USD - US Dollar
              </a>
            </li>

            <li>
              <a href="#Woodex" className="sidebar-link">
                Euro
              </a>
            </li>

            <li>
              <a href="#Woodex" className="sidebar-link">
                Pound
              </a>
            </li>
          </ul>
        </div>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link " data-nav-link>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="#product" className="navbar-link" data-nav-link>
                Product
              </a>
            </li>

            <li className="navbar-item active">
              <a href="#blog" className="navbar-link" data-nav-link>
                Blogs
              </a>
            </li>
          </ul>
        </nav>

        <ul className="contact-list">
          <li>
            <p className="contact-list-title">Contact Us</p>
          </li>

          <li className="contact-item">
            <address className="address">
              69 Halsey St, Ny 10002, New York, United States
            </address>
          </li>

          <li className="contact-item">
            <a href="mailto:support.center@woodex.co" className="contact-link">
              support.center@woodex.co
            </a>
          </li>

          <li className="contact-item">
            <a href="tel:00001235567890" className="contact-link">
              (0000) 1235 567890
            </a>
          </li>
        </ul>

        <div className="social-wrapper">
          <p className="social-list-title">Follow US On Socials</p>

          <ul className="social-list">
            <li>
              <a href="#facebook" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#twitter" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/feed/" className="social-link">
              <ion-icon name="logo-tumblr"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={nav ? "overlay active" : "overlay"}
        onClick={toggleClick}
      ></div>
    </>
  );
};

export default Navebar;
