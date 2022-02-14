import './Menu.css';
import ItemMenu from './ItemMenu';
import Produtos from './Produtos';

function Menu() {
  return (
    <div className="Menu">
      <div className="NavLateral">
        <ItemMenu name="Hambúrguer" />
        <ItemMenu name="Porções e molhos" />
        <ItemMenu name="Sobremesas" />
        <ItemMenu name="Bebidas Soft" />
        <ItemMenu name="Bebida Alcóolica" />
      </div>
      <div className="roloPrincipal">
        <Produtos imagem="/logo.png" nomeProduto="Teste" detalhes="testinho" />
        <Produtos imagem="./logo.png" nomeProduto="Teste" detalhes="testinho" />
        <Produtos imagem="./logo.png" nomeProduto="Teste" detalhes="testinho" />
        <Produtos imagem="./logo.png" nomeProduto="Teste" detalhes="testinho" />
        <Produtos imagem="./logo.png" nomeProduto="Teste" detalhes="testinho" />
      </div>
    </div>
  );
}
export default Menu;
