import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/formContainer.scss';
import axios from 'axios';

function Register() {
  const [body, setBody] = useState({name:'', email:'', password:'', amount:0});

  const handleChange = ({target}) => {
    const {name, value} = target;
    setBody({
      ...body, 
      [name] : value
    })
  }

  const handleSubmit = e => {
e.preventDefault();
axios.post('http://localhost:3001/api/register', body)
.then(({data}) => console.log(data))
  }
  return (
   <main className='form-container' onSubmit={handleSubmit}>
     <h2>Registro de usuario</h2>
     <div className='inputs-container'>
     <input placeholder='Ingrese un nombre' className='input-item' type="text" name='name' onChange={handleChange}/>
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese un email' className='input-item' type="email" name='email' onChange={handleChange} />
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese una contraseña' className='input-item' type="password" name='password' onChange={handleChange}/>
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese su contraseña nuevamente' className='input-item' type="password" name='password2'/>
     </div>  
     <div className='inputs-container'>
     <button className='input-item button' type="submit">Enviar</button>
     </div>
      <Link to='/login' className='link'><p className='register-to-login'> ¿Ya tienes una cuenta?</p></Link>  
   </main>
  );
}

export default Register;

