import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import { wrapper } from "redux/store";
import AuthProvider from "../Context/AuthProvider";
import Footer from "components/shared/Footer";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, [])
    if (!showChild) {
        return null;
    }
    return (
        <>
            <AuthProvider>
                <Navbar />
                <Component {...pageProps} />
            </AuthProvider>

            <Footer />
        </>
    );
}

export default wrapper.withRedux(MyApp);
