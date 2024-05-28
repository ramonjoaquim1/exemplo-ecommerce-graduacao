import { PersonOutline } from "@mui/icons-material";
import { FC, useState } from "react";
import "./index.css";
import { Popover } from "@mui/material";

const IconeLogin: FC = () => {
    const [openPopover, setOpenPopover] = useState<boolean>(false);
    const [ancoraPopover, setAncoraPopover] = useState<HTMLDivElement | null >(null);
    
    const onClickLogin = (evento: React.MouseEvent<HTMLDivElement>) => {
        setOpenPopover((openPopover) => !openPopover);
        setAncoraPopover(evento.currentTarget);
    }

    const onClosePopover = () => {
        setOpenPopover(false);
    }

    return <>

        <div className="container-login" onClick={onClickLogin}>
            <div className="div-logo">
                <PersonOutline color="primary" sx={{ fontSize: 34 }} />
            </div>
            <div className="div-usuario">
                <div className="texto-login">Olá, visitantes</div>
                <div className="texto-login">Entre ou cadastra-se</div>

            </div>
        </div>
        <Popover open={openPopover}
            onClose={onClosePopover}
            anchorEl={ancoraPopover}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}>
            Teste openPopover
        </Popover>
    </>
}

export default IconeLogin;