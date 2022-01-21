import "./styles/home.scss";

function Home() {
  return (
    <main className="home-container">
      <div className="amount-in-count">
        <div className="amount-number">
          <h2>$10000</h2> <i class="far fa-eye-slash eye"></i>
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
      <div className="records-account">
        <ul className="records-items-container">
         <li className="item-records">Ultimo movimiento <i class="fas fa-trash-alt"></i></li>
         <li className="item-records">Ultimo movimiento <i class="fas fa-trash-alt"></i></li>
         <li className="item-records">Ultimo movimiento <i class="fas fa-trash-alt"></i></li>
         <li className="item-records">Ultimo movimiento <i class="fas fa-trash-alt"></i></li>
         <li className="item-records">Ultimo movimiento <i class="fas fa-trash-alt"></i></li>
         <li className="item-records">Ultimo movimiento <i class="fas fa-trash-alt"></i></li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
