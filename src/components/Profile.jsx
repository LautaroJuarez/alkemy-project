import "./styles/profile.scss";

function Profile() {
  return (
    <main className="profile-user-data-container">
      <div className="profile-user-image">
        <div className="user-image-container">
          <img
            src="https://as01.epimg.net/epik/imagenes/2018/11/08/portada/1541669017_242892_1541671090_noticia_normal.jpg"
            alt=""
          />
        </div>
      </div>
      <h3>Datos Personales</h3>
      <br />
      <div className="profile-user-info">
        <section>
          <div className="item-data-user">NOMBRE: Jessie Pinkman</div>
          <div className="item-data-user">EMAIL: Pinkman@gmail.com</div>
          <div className="item-data-user">Contraseña: 123456</div>
          <div className="item-data-user">DNI: 12321341</div> </section>
        <section>
          <div className="item-data-user">CBU:12434323423432423 </div>
          <div className="item-data-user">CIUDAD: albuquerque</div>
          <div className="item-data-user">PROVINCIA: Nuevo Mexico</div>
          <div className="item-data-user">PAÍS: united states</div>
        </section>
      </div>
    </main>
  );
}

export default Profile;
