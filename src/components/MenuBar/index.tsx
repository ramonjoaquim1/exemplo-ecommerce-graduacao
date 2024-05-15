import { FC } from "react";
import "./index.css"



const MenuBar : FC = () => {
    return <>
        <div className="menu">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/sobre">Sobre</a></li>
                {/* <li><a href="/menuInicio">Menu-Inicio</a></li> */}
            </ul>
        </div>
    </>
}

export default MenuBar;


