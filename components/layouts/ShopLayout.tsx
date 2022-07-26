import { Navbar } from "components/ui";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
    description: string;
    imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
    children,
    title,
    description,
    imageFullUrl,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />

                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                {imageFullUrl && (
                    <meta property='og:image' content={imageFullUrl} />
                )}
            </Head>
            <nav>
                <Navbar />
            </nav>
            <main
                style={{
                    margin: "80px auto",
                    maxWidth: "1440px",
                    padding: "0 30px",
                }}
            >
                {children}
            </main>
            <footer>{/* Todo footer*/}</footer>
        </>
    );
};
