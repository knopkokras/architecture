import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link className="logo" to={"/"}>
            architecture
          </Link>
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
    </header>
  );
};

export default Header;
