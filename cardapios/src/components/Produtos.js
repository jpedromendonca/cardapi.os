import './Produtos.css';

function Produtos(props) {
  return (
    <div className="Produtos">
      <img src={props.imagem} className="ImgProduto" />
      <div className="Descricao">
        <label className="NomeProduto">{props.nomeProduto}</label>
        <p className="DetalhesProduto">{props.detalhes}</p>
      </div>
    </div>
  );
}
export default Produtos;
