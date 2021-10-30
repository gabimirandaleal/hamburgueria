import ItemVitrine from '../itemVitrine';
import "./style.css"


function Vitrine({ produtos, carrinho, setCarrinho }) {

    function inserirCarrinho(itemASerInserido) {
        if ((carrinho.filter((item) => itemASerInserido.name === item.name)).length === 0) {
            setCarrinho([...carrinho, itemASerInserido = { ...itemASerInserido, quantidade: 1 }])
        }
    }

    return (
        <div className="produtos">
            <div className="products">
                {produtos.map((item) =>
                    <ItemVitrine inserirCarrinho={inserirCarrinho} key={item.id} product={item} setCarrinho={setCarrinho} />
                )}
            </div>
        </div>
    );

}


export default Vitrine