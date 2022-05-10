import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import { wrapper } from "redux/store";
import AuthProvider from "../Context/AuthProvider";
import Footer from "components/shared/Footer";
import { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';


function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);

    const darkTheme = createTheme({
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
                <ThemeProvider theme={darkTheme}>

                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </AuthProvider>

        </>
    );
}

export default wrapper.withRedux(MyApp);
