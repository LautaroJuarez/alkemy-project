import "./styles/menuRes.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MenuRes({ data }) {
  const { name, cbu, user_image } = data;
  console.log(name);
  return (
    <div className="menu-responsive">
      <div className="user-container">
        <div className="user-info">
          <p className="info">Nombre: {name}</p>
          <p className="info">CBU: {cbu} </p>
        </div>
        <div className="user-image">
          <div className="image-container">
            <img src={user_image} alt="" className="image" />
          </div>
        </div>
      </div>
      <ul className="options-menu-res-container">
        <li className="item-menu-res">
          <Link to="/profile" className="link">
            Mi perfil
          </Link>
        </li>
        <li className="item-menu-res">Ultimos movimientos</li>
        <li className="item-menu-res">Acerca de</li>
        <li className="item-menu-res">
          <Link to="/login" className="link">
            Salir <i class="fas fa-sign-out-alt"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuRes;
