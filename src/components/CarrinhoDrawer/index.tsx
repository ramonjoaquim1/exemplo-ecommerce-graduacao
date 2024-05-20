import { ShoppingCart } from "@mui/icons-material";
import { FC } from "react";
import "./index.css"
import { Badge } from "@mui/material";

const CarrinhoDrawer: FC = () => {

return <>
<div className="carrinho">

    <Badge
    badgeContent={1}
    color="primary"
    anchorOrigin={{
        vertical: "top",
        horizontal: "left"
    }} >
    <ShoppingCart color="action" />
    </Badge>

        
</div>
</>



}

export default CarrinhoDrawer;