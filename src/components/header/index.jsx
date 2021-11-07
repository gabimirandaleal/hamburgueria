import "./style.css"
import Button from "../Button"
import { useState } from "react"

function Header({ produtos, setFilteredProducts }) {
    const [input, setInput] = useState("")

    function setar() {
        setInput("")
    }

    function filtrarProducts(text) {
        setInput(text)
        setFilteredProducts(produtos.filter((item) => {
            return ((item.name).toLowerCase().indexOf(text.toLowerCase()) > -1 || (item.category).toLowerCase().indexOf(text.toLowerCase()) > -1) && item.name
        }));
    }



    return (
        <div className="container-header">
            <div className="header">
                <div className="title">
                    <span className="title-burguer">Burguer </span>
                    <span className="title-kenzie">Gabi</span>
                </div>
                <div className="header-pesquisa">
                    <input type="text"
                        placeholder="Digitar Pesquisa"
                        value={input}
                        onChange={(event) => filtrarProducts(event.target.value)}
                    />
                    <Button onClick={setar} type="submit" text="Pesquisar" />
                </div>
            </div>
        </div>
    )
}

export default Header