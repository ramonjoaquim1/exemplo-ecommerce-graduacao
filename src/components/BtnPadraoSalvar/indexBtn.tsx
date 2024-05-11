import { FC } from "react";
import "./indexBtn.css";
import { MdAddShoppingCart } from "react-icons/md";

interface IBtnProdutos {
    onClick : (event : any) => void;
}

const ClickProdutos: FC<IBtnProdutos> = ({
    onClick
}) => {
    return (
        <div>
            <button className="btnTeste" onClick={(event) => {
                console.log('Teste botão...',event);
                onClick(event.button);
                alert('Teste click button');
            }}>Comprar <MdAddShoppingCart style={{ verticalAlign: 'middle', marginLeft: '1px' }} /> </button>
        </div>
    );
}

export default ClickProdutos;