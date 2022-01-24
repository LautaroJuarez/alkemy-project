import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuRes from './MenuRes';
import './styles/header.scss'

function Header() {
 const [menuRes, setMenuRes] = useState(false);

  const handleClick = () => {
  !menuRes ? setMenuRes(true) : setMenuRes(false);
  }

  const [dataUser, setDataUser] = useState({});

  useEffect(()=> {
    fetch('http://localhost:3001/api')
  .then(res => res.json())
  .then(data => setDataUser(data))
  }, [])

console.log(dataUser[0])
  return (
    <header>
        <nav className='navbar'>
        <i className="fas fa-bell"><span className='red-notifications'>+9</span></i>
        <Link to='/home' className='link'><div className="logo">Alkemy</div></Link>
        <i className="fas fa-bars menu-icon" onClick={handleClick}></i>
        {menuRes && <MenuRes data={dataUser[0]}/>}
        </nav>
    </header>

  );
}

export default Header;
