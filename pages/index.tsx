import { Typography } from "@mui/material";
import { ShopLayout } from "components/layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <ShopLayout title='Teslo-Shop - Home' description='Productos'>
            <Typography variant='h1' component='h1'>
                Hola
            </Typography>
        </ShopLayout>
    );
};

export default Home;
