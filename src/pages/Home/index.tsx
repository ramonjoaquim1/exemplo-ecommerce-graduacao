import { FC, useEffect, useState } from "react";
import { STATU_CODE, apiGet } from "../../api/RestClient";
import { IBtnProduto, IProduto } from "./types";
import "./index.css";
import ClickProdutos from "../../components/BtnPadraoSalvar/indexBtn";

const Home : FC = () =>{
    const [produtos, setProdutos] = useState<IProduto[]>([]); 
    // const [botaoProdutos, setBotaoProdutos] = useState(false);

    const carregaProdutos = async() => {
        const response = await apiGet("/produtos/");
        if (response.status === STATU_CODE.OK) {
            console.log(response);
            setProdutos(response.data);

        }
    }

    useEffect(() => {
        carregaProdutos();
    }, []);

    return <>
        {produtos?.length ? <> 
            <div className="container">
                {produtos.map((produto: IProduto) => {
                    return <>
                       <div className="produto">
                            <a className="produto_imagem" href={`/produtos/detalhes/${produto.id}`}>
                                <img src={produto.imagemPequena}/>
                            </a>
                            <div className="produto_nome">
                                <p>{produto.nome}</p>
                            </div>
                            <div className="produto_preco">
                                <p>R$ {produto.preco}.00</p>
                                <ClickProdutos 
                                    onClick={() => console.log('Click botão')} 
                                    url={`/produtos/detalhes/${produto.id}`}                                     
                                />
                            </div>
                       </div>

                    </>
                })}
            </div>
        </> : <div>Lista vazia</div>}
        
    </>
}
export default Home;