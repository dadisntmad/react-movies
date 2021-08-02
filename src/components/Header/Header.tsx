import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import {SearchForm} from "../SearchForm/SearchForm";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="menu">
            <Link to="/">
              <img width={75} src={logo} alt="logo"/>
            </Link>
            <nav className="nav">
              <ul>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/tv">TV</Link></li>
                <li><Link to="/seasons">TV Seasons</Link></li>
                <li><Link to="/episodes">TV Episodes</Link></li>
              </ul>
            </nav>
          </div>
          <SearchForm/>
        </div>
      </div>
    </header>
  );
};
