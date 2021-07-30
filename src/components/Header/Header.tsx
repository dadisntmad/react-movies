import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="menu">
            <a href="#">
              <img width={75} src={logo} alt="logo"/>
            </a>
            <nav className="nav">
              <ul>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">TV Seasons</a></li>
                <li><a href="#">TV Episodes</a></li>
              </ul>
            </nav>
          </div>
          <div className="find__button">
            <input type="text" placeholder="Search"/>
            <div className="tooltip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="18px">
                <path d="M22 20L20 22 14 16 14 14 16 14z"/>
                <path
                  d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"/>
                <path d="M13.7 12.5H14.7V16H13.7z" transform="rotate(-44.992 14.25 14.25)"/>
              </svg>
              <span className="tooltiptext">Search</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
