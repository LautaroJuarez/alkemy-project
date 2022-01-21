import React from 'react';
import './styles/formContainer.scss'

function Register() {
  return (
   <form className='form-container'>
     <h2>Registro de usuario</h2>
     <div className='inputs-container'>
     <input placeholder='Ingrese un nombre' className='input-item' type="text" />
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese un email' className='input-item' type="email" />
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese una contraseña' className='input-item' type="password" />
     </div>  
     <div className='inputs-container'>
     <input placeholder='Ingrese su contraseña nuevamente' className='input-item' type="password" />
     </div>  
     <div className='inputs-container'>
     <button className='input-item button' type="submifikle">Enviar</button>
     </div>
     <p className='register-to-login'>¿Ya tienes una cuenta?</p>  
   </form>
  );
}

export default Register;

