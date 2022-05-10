import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import { wrapper } from "redux/store";
import AuthProvider from "../Context/AuthProvider";
import Footer from "components/shared/Footer";
import { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkScrollbar, Paper } from "@mui/material";


function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);


    const theme = createTheme({
        palette: {
            mode: 'light',
            // mode: 'dark',
        },
    });
    useEffect(() => {
        setShowChild(true);
    }, [])
    if (!showChild) {
        return null;
    }
    return (
        <>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <Paper>

                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </Paper>
                </ThemeProvider>
            </AuthProvider>

        </>
    );
}

export default wrapper.withRedux(MyApp);
