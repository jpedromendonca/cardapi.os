import './Login.css';
import ItemLogin from './ItemLogin';
import React from 'react';
//import Menu from './Menu';
//import Cadastro from './Cadastro';

function Login() {
  return (
    <div className="Login">
      <div className="MenuLogin">
        <ItemLogin name="Quem somos" />
        <ItemLogin name="Seja um parceiro" />
      </div>

      <div className="FormularioLogin">

        <h3>Faça seu login</h3>

        <form className="Formulario">
          <div className="email">
            <label for="email"> E-MAIL </label>
            <input type="email" name="email" id="email" placeholder="Insira o email cadastrado" required />
          </div>

          <div className="senha">
            <label for="senha"> SENHA </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <p id='alternativa'>OU</p>
          <div className='loginAlternativo'>
            <button className='loginRedeSocial'><img alt="" src="https://cdn.icon-icons.com/icons2/2631/PNG/512/google_search_new_logo_icon_159150.png" width="50" height="50"></img></button>
            <button className='loginRedeSocial'><img alt="" src="https://i.pinimg.com/originals/2b/79/51/2b7951ca3923b28a9e77518b19d1ea46.png" width="50" height="50"></img></button>
          </div>

          <div className='iniciarCadastro'>
            <p>Ainda não possui cadastro?</p>
            <p className='linkCadastro' >Cadastre-se aqui!</p>
            <button className='entrar'>ENTRAR</button>
          </div>

        

        </form>
      </div>
    </div>
  );
}

export default Login;
