function Cadastro() {
  return (
    <div id="container">
      <div className="item">
        <div className="logo-nome">
          <h1>Cardap.io</h1>
          <img src="imagens/logo.jpeg" />
        </div>
        <div className="menu">
          <ul className="opcoes">
            <li>
              <a href="#">Hambúrguers</a>
            </li>
            <li>
              <a href="#">Bebidas não alcoólicas</a>
            </li>
            <li>
              <a href="#">Bebidas alcoólicas</a>
            </li>
            <li>
              <a href="#">Porções e molhos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="item a1">
        <h1>Cadastre-se</h1>
        <form className="formulario" action="">
          <input
            type="text"
            name="nome-completo"
            className="inputs"
            id="nome-completo"
            placeholder="Nome completo"
          />
          <input
            type="text"
            name="cpf"
            className="inputs"
            id="cpf"
            placeholder="CPF"
          />
          <input
            type="text"
            name="telefone"
            className="inputs"
            id="telefone"
            placeholder="Telefone celular"
          />
          <input
            type="password"
            name="senha"
            className="inputs"
            id="senha"
            placeholder="Senha"
          />
          <input
            type="password"
            name="conf-senha"
            className="inputs"
            id="conf-senha"
            placeholder="Confirmacao senha"
          />
          <button className="botao-continuar">Continuar</button>
          <p className="descricao">
            Já possui conta?<a href="#"> Faça login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
