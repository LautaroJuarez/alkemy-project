import axios from "axios";
import { useState } from "react";
import "./styles/profile.scss";

function ProfileEdit() {
  const [body, setBody] = useState({
    name: "",
    email: "",
    password: "",
    amount: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/profileEdit/:id", body)
      .then(({ data }) => console.log(data));
  };
  return (
    <formn className="profile-user-data-container">
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
          <div className="item-data-user">
            NOMBRE: <input className="" placeholder="" name="name"></input>
          </div>
          <div className="item-data-user">
            EMAIL: <input className="" placeholder="" name="email"></input>
          </div>
          <div className="item-data-user">
            Contraseña:{" "}
            <input className="" placeholder="" name="password"></input>
          </div>
          <div className="item-data-user">
            DNI: <input className="" placeholder="" name="dni"></input>
          </div>
        </section>
        <section>
          <div className="item-data-user">
            CBU: <input className="" placeholder="" name="cbu"></input>{" "}
          </div>
          <div className="item-data-user">
            País: <input className="" placeholder="" name="country"></input>
          </div>
          <div className="item-data-user">
            PROVINCI:{" "}
            <input className="" placeholder="" name="province"></input>
          </div>
          <div className="item-data-user">
            CIUDAD: <input className="" placeholder="" name="city"></input>
          </div>
        </section>
      </div>
    </formn>
  );
}

export default ProfileEdit;
