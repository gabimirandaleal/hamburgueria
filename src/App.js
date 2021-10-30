import './App.css';
import './reset.css';
import Header from './components/header';
import {useState} from "react"
import Vitrine from './components/vitrine';
import Carrinho from './components/Carrinho';

function App() {
  
  const [products] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Brocadão', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Milkshake', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [carrinho, setCarrinho] = useState([])

  



  return (
    <div className="App">
        <Header produtos={products} setFilteredProducts={setFilteredProducts}></Header>
        <div className="container-menu">
          <Vitrine carrinho={carrinho} setCarrinho={setCarrinho} produtos={filteredProducts.length===0?products:filteredProducts}></Vitrine>
          <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
        </div>
        
    </div>
  );
}

export default App;
