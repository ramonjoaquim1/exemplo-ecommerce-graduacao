import { Close, Delete, ShoppingCart } from "@mui/icons-material";
import { FC, useState } from "react";
import "./index.css"
import { Badge, Box, Button, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { addCarrinho, carregarCarrinho, obterQuantidadeCarrinho } from "../../store/CarrinhoStore/carrinhoStore";
import { ICarrinhoStore } from "../../store/CarrinhoStore/types";
import InputQuantidade from "../InputQuantidade";

const CarrinhoDrawer: FC = () => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [carrinho, setCarrinho] = useState<ICarrinhoStore[]>(carregarCarrinho());

    const atualizarQuantidadeCarrinho = (item: ICarrinhoStore) => {
        const carrinhoAtualizado = addCarrinho(item);

        setCarrinho(carrinhoAtualizado);
    }
    return <> <div className="carrinho" onClick={() => { setOpenDrawer(true); }}>

        <Badge
            badgeContent={obterQuantidadeCarrinho()}
            color="primary"

            anchorOrigin={{
                vertical: "top",
                horizontal: "left"
            }} >
            <ShoppingCart color="action" />
        </Badge>


    </div>

        <Drawer open={openDrawer} anchor="right"
            classes={{ paper: "tamanho-paper-drawer" }}>

            <Box
                paddingLeft={"10px"}
                paddingRight={"10px"} >

                <Button variant="text"
                    startIcon={<Close />}
                    onClick={() => {
                        setOpenDrawer(false);
                    }}
                >
                    Fechar
                </Button>

            </Box>
            <Box
                paddingLeft={"10px"}
                paddingRight={"10px"}>
                {!carrinho?.length &&
                    <>
                        <Box>
                            <Typography variant="body1">
                                <strong>Seu carrinho nao esta cheio, favor bote aqui um produto</strong>
                            </Typography>
                        </Box>
                    </>}
                {carrinho?.map((c: ICarrinhoStore) => {
                    return <>
                        <Grid
                            container={true}
                            alignItems={"center"}
                        >
                            <Grid className="box-imagem" item={true}>
                                <img className="imagem" src={c.imagemPequena} />
                            </Grid>
                            <Grid className="box-detalhes" item={true}>

                                <Box> <strong>{c.nome}</strong> </Box>
                            </Grid>

                            <Grid className="box-quantidade" >

                                <InputQuantidade
                                    quantidade={c.quantidade}
                                    onChange={(quantidade: number) => {
                                        const carrinhoAtualizado: ICarrinhoStore = {
                                            ...c,
                                            quantidade: quantidade,
                                        }

                                        atualizarQuantidadeCarrinho(carrinhoAtualizado);
                                    }}

                                />

                            </Grid>
                            <Grid className="box-remover" item={true}>
                                <IconButton>
                                    <Delete color="error" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </>
                })}
            </Box >
        </Drawer>
    </>
}

export default CarrinhoDrawer;