import React from 'react'

import './Menu.css'

import logo from '../../images/logo.png';

import { Link } from 'react-router-dom';

function Menu({ menu }) {
  return (
    <div className="menu-logo--container">
      <Link to="/">
        <img className="img-container" src={logo}/>
      </Link>
        <ul className="menu-container">
            {
                menu.length > 0 && menu.map((item, index) => (
                    <Link key={index} to={`/${item}`}>
                      <li>{item}</li>
                    </Link>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu
