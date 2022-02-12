import './Login.css';
import ItemLogin from './ItemLogin';
import React,{useState} from 'react';

function Login() {
  return (
    <div className='Login'>

      <div className="MenuLogin">
        <label className="TituloLogin" >CARDÁPI.OS </label>
        <ItemLogin name="Quem somos" />
        <ItemLogin name="Seja um parceiro" />
      </div>
    
      <div className="FormularioLogin">

        <p>Faça seu login</p>
        
        <form className='Formulario'>

          <div className='email'>
            <label for="email"> E-MAIL </label>
            <input type="email" name="email" placeholder="Insira o email cadastrado" required />
          </div>

          <div className='senha'>
            <label for="senha"> SENHA </label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha" required/>
          </div>

          <button className='entrar'>ENTRAR</button>

        </form>
      </div>
    </div>
  );
  
}

export default Login; 
