import "./styles/home.scss";
import {useState} from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Home() {
  const [eyeAmount, setEyeAmount] = useState(false);

const handleClick = () => {
!eyeAmount ? setEyeAmount(true) : setEyeAmount(false)
}
const handleAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Registro eliminado.',
    text: 'Genial, se eliminó el registro'
  })
}

  return (
    <main className="home-container">
      <div className="section-left-desktop">
      <div className="amount-in-count">
        <div className="amount-number">
          <h2>{eyeAmount ? 'saldo no disponible' : '$10000'}</h2> <i className={eyeAmount ? 'far fa-eye-slash eye-active' : 'far fa-eye-slash eye'} onClick={handleClick}></i>
        </div>
      </div>
      <div className="options-with-amount">
        <ul className="options-items-container">
          <li className="options-item">Transferir</li>
          <li className="options-item">Ingresar dinero</li>
          <li className="options-item">Retirar dinero</li>
          <li className="options-item">Movimientos</li>
        </ul>
      </div>
      </div>
      <div className="records-account">
        <ul className="records-items-container">
         <li className="item-records">Ultimo movimiento <i className="fas fa-trash-alt trash-icon" onClick={handleAlert}></i></li>
         <li className="item-records">Ultimo movimiento <i className="fas fa-trash-alt trash-icon" onClick={handleAlert}></i></li>
         <li className="item-records">Ultimo movimiento <i className="fas fa-trash-alt trash-icon"></i></li>
         <li className="item-records">Ultimo movimiento <i className="fas fa-trash-alt trash-icon"></i></li>
         <li className="item-records">Ultimo movimiento <i className="fas fa-trash-alt trash-icon"></i></li>
         <li className="item-records">Ultimo movimiento <i className="fas fa-trash-alt trash-icon"></i></li>
         </ul>
      </div>
    </main>
  );
}

export default Home;
