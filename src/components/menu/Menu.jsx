import React from "react";
import './menu.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
    const [exibirBotao, setExibirBotao] = useState(true);
    const navigate = useNavigate();

    function escondeBotao(){
        setExibirBotao(!exibirBotao);
        navigate("/home");
    }
    return(
        <div className="container">
            {exibirBotao && <button className="meu-botao" onClick={escondeBotao}>Vamos Começar?</button>}
        </div>
    )
}
export default Menu;