import './ItemMenu.css';

function ItemMenu(props) {
  return (
    <div className="ItemMenu">
      <button className="item" onClick={props.pagina}>
        {props.name}
      </button>
    </div>
  );
}
export default ItemMenu;
