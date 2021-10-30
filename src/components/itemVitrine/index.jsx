import Button from "../Button"
import "./style.css"

function ItemVitrine({ product, inserirCarrinho }) {

    return (
        <div className="item">
            <div className="item-div-img">
                <img className="item-img" src={product.img} alt="" />
            </div>
            <div className="item-detalhes">
                <h2>{product.name}</h2>
                <span className="espacamento">{product.category}</span>
                <span className="espacamento itemVitrine-price">{`R$ ${(product.price.toFixed(2)).toString().replace(".", ",")}`}</span>
                <Button onClick={() => inserirCarrinho(product)} className="espacamento" text="Adicionar" ></Button>
            </div>
        </div>
    )
}

export default ItemVitrine