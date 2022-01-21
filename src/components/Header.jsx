import React from 'react';
import './styles/header.scss'

function Header() {
  return (
    <header>
        <nav className='navbar'>
        <i class="fas fa-bell"></i>
        <div className="logo">Alkemy</div>
        <i class="fas fa-bars menu-icon"></i>
        </nav>
    </header>

  );
}

export default Header;
