import { FC } from "react";
import "./indexBtn.css";
import { MdAddShoppingCart } from "react-icons/md";

interface IBtnProdutos {
    onClick : () =>void;
    url: string;
}

const ClickProdutos: FC<IBtnProdutos> = ({onClick,url}) => {
    const indentificadorBotao = () => {
        console.log('teste botão')
        onClick();
        window.location.href = url;
    };
    return (
        <div>
            <button className="btnTeste" onClick={indentificadorBotao}>
            Comprar <MdAddShoppingCart style={{ verticalAlign: 'middle', marginLeft: '1px' }} /> </button>
        </div>
    );
}

export default ClickProdutos;