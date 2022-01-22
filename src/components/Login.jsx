import React from 'react';
import { Link } from 'react-router-dom';
import './styles/formContainer.scss'

function Login() {
  return (
<div>
<form className='form-container'>
     <h2>Inicio de sesión</h2>
     <div className='inputs-container'>
     <input placeholder='Ingrese un nombre' className='input-item' type="text" />
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese un email' className='input-item' type="email" />
     </div>   
     <div className='inputs-container'>
     <button className='input-item button' type="submifikle">Enviar</button>
     </div>
     <Link to='/register' className='link'><p className='register-to-login'>¿Aún no tienes una cuenta?</p></Link>  
   </form>
</div>
  );
}

export default Login;
