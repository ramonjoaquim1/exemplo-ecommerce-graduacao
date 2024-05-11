import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet, STATU_CODE } from "../../api/RestClient";
import "./index.css"
import { IProdutoDetalhe } from "./types";
import ClickProdutos from "../../components/BtnPadraoSalvar/indexBtn";


const ProdutosDetalhe: FC = () => {
    const { codigoProduto } = useParams();
    const [produto, setProduto] = useState<IProdutoDetalhe>();
    const [botaoProdutos, setBotaoProdutos] = useState(false);

    useEffect(() => { //só executa quando a pág é aberta
        console.log('>>>', codigoProduto);

        apiGet(`/produtos/${codigoProduto}`).then((response) => {
            if (response.status === STATU_CODE.OK) {
                console.log('>>>', response.data);
                setProduto(response.data);
            }
        });

    }, []);

    return <>
        <div className="conteiner-produto">
            <div className="produto-detalhe">
                <div className="imagem-produto">
                    <img src={produto?.imagemGrande} />
                </div>
                <div className="dados-produto">
                    <div className="nome-produto">{produto?.nome}</div>
                    <hr />
                    <div className="codigo-produto">{`Codigo produto: ${produto?.codigoProduto}`}</div>
                    <div className="preco-produto">
                        <div className="preco">{`Preço R$: ${produto?.preco}`}</div>
                    </div>
                    <br />
                    <ClickProdutos 
                    onClick={(botaoProdutos :true) => {
                        setBotaoProdutos(botaoProdutos);
                    }}
                />
                </div>
               
            </div>
        </div>
    </>
}

export default ProdutosDetalhe;