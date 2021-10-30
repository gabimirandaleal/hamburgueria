import { useState } from "react";
import "./style.css"

function ItemCarrinho({ carrinho, product, removerCarrinho, setCarrinho }) {
    const [quantidade, setQuantidade] = useState(1)

    function somar() {
        setQuantidade(quantidade + 1)
        setCarrinho([...(carrinho.filter((item) => item !== product)), { id: product.id, name: product.name, category: product.category, img: product.img, quantidade: product.quantidade + 1, price: product.price }])
    }
    function sub() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1)
            setCarrinho([...(carrinho.filter((item) => item !== product)), { id: product.id, name: product.name, category: product.category, img: product.img, quantidade: product.quantidade - 1, price: product.price }])
        }
    }



    return (
        <div>
            <div className="container-item">
                <img src={product.img} alt="" />
                <div className="container-item-detalhes">
                    <h2>{product.name}</h2>
                    <span>{product.category}</span>
                    <div className="container-item-qnt">
                        <span>Quantidade: {quantidade}</span>
                        <div>
                            <button className="button-qnt soma" onClick={somar}>+</button>
                            <button className="button-qnt sub" onClick={sub}>-</button>
                        </div>
                    </div>

                </div>

                <button onClick={() => removerCarrinho(product)} className="button-remove">Remover</button>
            </div>
        </div>
    );
}

export default ItemCarrinho