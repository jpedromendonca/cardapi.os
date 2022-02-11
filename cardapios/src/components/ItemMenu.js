import './ItemMenu.css';

function ItemMenu(props) {
  return (
    <div className="ItemMenu">
      <button className="item">{props.name}</button>
    </div>
  );
}
export default ItemMenu;
