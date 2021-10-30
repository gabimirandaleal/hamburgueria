import "./style.css"

function Button({ text, onClick, className }) {
    return (

        <button onClick={onClick} className={`button-padrao ${className}`} >{text}</button>

    );
}

export default Button