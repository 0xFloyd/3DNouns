import React from 'react';
import logo from './assets/nouns-logo.svg';

const Header = () => {
  return (
    <div>
      <div className="logo-container">
        <a href="https://nouns.wtf">
          <img className="nouns-logo" src={logo} alt="NOUNS" />
        </a>
      </div>
    </div>
  );
};

export default Header;
