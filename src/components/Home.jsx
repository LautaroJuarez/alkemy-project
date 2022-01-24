import "./styles/home.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  const [eyeAmount, setEyeAmount] = useState(false);
  const [notification, setNotification] = useState(0);

  const handleClick = () => {
    !eyeAmount ? setEyeAmount(true) : setEyeAmount(false);
  };
  const handleAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Registro eliminado.",
      text: "Genial, se eliminó el registro",
    });
  };
  const [dataUser, setDataUser] = useState({});
  const [userLastMovements, setUserLastMovements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setDataUser(data[0]));

    fetch("http://localhost:3001/api/lastmovements")
      .then((res) => res.json())
      .then((data) => setUserLastMovements(data));
  }, []);

  if (!userLastMovements) {
    return console.log("hola");
  }

  return (
    <main className="home-container">
      <div className="section-left-desktop">
        <div className="amount-in-count">
          <div className="amount-number">
            <h2>
              {eyeAmount ? "saldo no disponible" : `${"$" + dataUser.amount}`}
            </h2>{" "}
            <i
              className={
                eyeAmount
                  ? "far fa-eye-slash eye-active"
                  : "far fa-eye-slash eye"
              }
              onClick={handleClick}
            ></i>
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
          <h2 className="item-records">Ultimos movimientos</h2>
          {userLastMovements.map((movement) => (
            <li key={movement.id} className="item-records">
              tipo de movimiento: {movement.type} <br />
              Motivo: {movement.concept} <br />
              Monto: {movement.amount}
              <i
                className="fas fa-trash-alt trash-icon"
                onClick={handleAlert}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;
