import './Menu.css';
import ItemMenu from './ItemMenu';
import Produtos from './Produtos';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <div className="corpo">
        <div className="NavLateral">
          <ItemMenu name="Hambúrguer" />
          <ItemMenu name="Porções e molhos" />
          <ItemMenu name="Sobremesas" />
          <ItemMenu name="Bebidas Soft" />
          <ItemMenu name="Bebida Alcóolica" />
        </div>
        <div className="roloPrincipal">
          <Produtos
            imagem="/logo.png"
            nomeProduto="Teste"
            detalhes="testinho"
          />
          <Produtos
            imagem="./logo.png"
            nomeProduto="Teste"
            detalhes="testinho"
          />
          <Produtos
            imagem="./logo.png"
            nomeProduto="Teste"
            detalhes="testinho"
          />
          <Produtos
            imagem="./logo.png"
            nomeProduto="Teste"
            detalhes="testinho"
          />
        </div>
      </div>
    </div>
  );
};
export default Menu;
