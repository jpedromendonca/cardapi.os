import './ItemMenu.css';

function ItemMenu(props) {
  return (
    <div className="ItemMenu">
      <button className="item" onclick={props.pagina}>
        {props.name}
      </button>
    </div>
  );
}
export default ItemMenu;
