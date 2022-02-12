import './ItemLogin.css';

function ItemLogin(props) {
  return (
    <div className="ListaLogin">
      <button className="itemLogin">{props.name}</button>
    </div>
  );
}
export default ItemLogin;
