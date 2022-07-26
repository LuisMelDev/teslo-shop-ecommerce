import React from "react";
import { ShopLayout } from "components/layouts";
import { Typography } from "@mui/material";

const NotFound = () => {
    return (
        <ShopLayout
            title={"Error Pagina no encontrada"}
            description={"Error Pagina no encontrad"}
        >
            <Typography variant='h1' component='h1'>
                404
            </Typography>
        </ShopLayout>
    );
};

export default NotFound;
