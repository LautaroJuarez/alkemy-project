import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuRes from './MenuRes';
import './styles/header.scss'

function Header() {
 const [menuRes, setMenuRes] = useState(false);

  const handleClick = () => {
  !menuRes ? setMenuRes(true) : setMenuRes(false);
  }
  return (

    <header>
        <nav className='navbar'>
        <i className="fas fa-bell"></i>
        <Link to='/home' className='link'><div className="logo">Alkemy</div></Link>
        <i className="fas fa-bars menu-icon" onClick={handleClick}></i>
        {menuRes && <MenuRes/>}
        </nav>
    </header>

  );
}

export default Header;
