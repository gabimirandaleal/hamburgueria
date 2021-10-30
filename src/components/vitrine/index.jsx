import ItemVitrine from '../itemVitrine';
import "./style.css"


function Vitrine({ produtos, carrinho, setCarrinho }) {

    function inserirCarrinho(itemASerInserido) {
        if ((carrinho.filter((item) => itemASerInserido.name === item.name)).length === 0) {
            setCarrinho([...carrinho, { id: itemASerInserido.id, name: itemASerInserido.name, category: itemASerInserido.category, img: itemASerInserido.img, quantidade: 1, price: itemASerInserido.price }])
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