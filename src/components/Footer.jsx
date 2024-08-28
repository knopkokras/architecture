import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container header__container">
        <div className="header__logo">
          <a className="logo" href="#">
            architecture
          </a>
          <span className="copyright">&#169; 2024, all rights reserved</span>
        </div>
        <div className="header__right">
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  News
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contacts
                </a>
              </li>
            </ul>
            <div className="connection">
              <p className="connection__contact">Call me</p>
              <div className="connection__phone">
                <a href="tel:+79118183410">+7 (911) 818-34-10</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
