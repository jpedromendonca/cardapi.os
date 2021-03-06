import './Cadastro.css';
import ItemMenu from './ItemMenu';

function Cadastro() {
  return (
    <div>
      <div class="col-1">
        <div class="menu">
          <ItemMenu name="Hambúrguer" />
          <ItemMenu name="Porções e molhos" />
          <ItemMenu name="Sobremesas" />
          <ItemMenu name="Bebidas Soft" />
          <ItemMenu name="Bebida Alcóolica" />
        </div>
      </div>
      <div class="col-2">
        <h1>Cadastre-se</h1>
        <form class="formulario" action="">
          <input
            type="text"
            name="nome-completo"
            class="inputs"
            id="nome-completo"
            placeholder="Nome completo"
          />
          <input
            type="text"
            name="cpf"
            class="inputs"
            id="cpf"
            placeholder="CPF"
          />
          <input
            type="text"
            name="telefone"
            class="inputs"
            id="telefone"
            placeholder="Telefone celular"
          />
          <input
            type="password"
            name="senha"
            class="inputs"
            id="senha"
            placeholder="Senha"
          />
          <input
            type="password"
            name="conf-senha"
            class="inputs"
            id="conf-senha"
            placeholder="Confirmacao senha"
          />
          <button class="botao-continuar">Continuar</button>
          <p class="descricao">
            Já possui conta?<a href="#"> Faça login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
