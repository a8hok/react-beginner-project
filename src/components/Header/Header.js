import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
        <Menu menu={["Home", "Contact", "Menu", "Blog"]}></Menu>
      </header>
  )
}

export default Header
