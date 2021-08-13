import React from 'react';

import { slide as Menu } from 'react-burger-menu';

import { SearchForm } from '../SearchForm/SearchForm';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="menu">
            <Link to="/">
              <img width={75} src={logo} alt="logo" />
            </Link>
            <Menu right styles={styles} noOverlay>
              <nav className="nav">
                <ul className="nav__menu">
                  <li className="nav__item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/series">Series</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/upcoming">Upcoming</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </Menu>
          </div>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '24px',
    right: '22px',
    top: '15px',
  },
  bmBurgerBars: {
    background: 'rgb(193, 193, 193)',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '34px',
    width: '34px',
    right: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
    height: '24px',
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100%',
  },
  bmMenu: {
    background: 'rgb(27 27 27)',
    padding: '3.1em 2.1em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
};
