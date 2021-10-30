import './style.css';
import ItemCarrinho from '../ItemCarrinho';
import Button from '../Button';

function Carrinho({ carrinho, setCarrinho }) {



    function removerCarrinho(itemASerRemovido) {
        setCarrinho(carrinho.filter((item) => item !== itemASerRemovido))
    }

    function removerCarrinhoTodo() {
        setCarrinho([])
    }

    const valorTotalCarrinho = carrinho.reduce(function (acumulador, valorAtual) {
        return acumulador + (valorAtual.price * valorAtual.quantidade);
    }, 0);

    return (
        <div className="carrinho-container">
            <div className="carrinho">
                <div className="title-carrinho">
                    <h1>Carrinho de compras</h1>
                </div>

                <div className="itens-carrinho">
                    {carrinho.length === 0 ?
                        <div className="itens-carrinho-vazio">
                            <h2>Sua sacola está vazia</h2>
                            <span>Adicione itens</span>
                        </div>
                        :
                        <div>
                            {
                                carrinho.map((item) => (
                                    <ItemCarrinho setCarrinho={setCarrinho} carrinho={carrinho} removerCarrinho={removerCarrinho} key={item.id} product={item} />
                                ))
                            }
                        </div>
                    }
                </div>
                <div className="container-price-geral">
                    <div className="container-price">
                        <span>Total</span>
                        <span>{(valorTotalCarrinho.toFixed(2)).toString().replace(".", ",")}</span>
                    </div>
                    <Button onClick={removerCarrinhoTodo} className="width-maxima" text="Remover todos"></Button>
                </div>
            </div>
        </div>
    )

}

export default Carrinho;