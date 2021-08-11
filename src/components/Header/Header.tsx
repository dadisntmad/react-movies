import React from 'react';

import {SearchForm} from '../SearchForm/SearchForm';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';

import './header.css';

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
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>
          <SearchForm/>
        </div>
      </div>
    </header>
  );
};
