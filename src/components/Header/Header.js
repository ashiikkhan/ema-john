import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className='header container'>
      <a href='/'>
        <img src={logo} alt='' />
      </a>
      <div>
        <a href='/shop'>Shop</a>
        <a href='/home'>Home</a>
        <a href='/inventory'>Inventory</a>
        <a href='/about'>About</a>
      </div>
    </nav>
  );
};

export default Header;
