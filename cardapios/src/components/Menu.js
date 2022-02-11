import './Menu.css';
import ItemMenu from './ItemMenu';

function Menu() {
  return (
    <div className="Menu">
      <label className="Titulo">CARDÁPI.OS</label>
      <ItemMenu name="Hambúrguer" />
      <ItemMenu name="Porções e molhos" />
      <ItemMenu name="Sobremesas" />
      <ItemMenu name="Bebidas Soft" />
      <ItemMenu name="Bebida Alcóolica" />
    </div>
  );
}
export default Menu;
