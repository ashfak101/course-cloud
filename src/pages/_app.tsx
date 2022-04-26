import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import { wrapper } from "redux/store";
import AuthProvider from "../Context/AuthProvider";
import Footer from "components/shared/Footer";
function MyApp({ Component, pageProps }: AppProps) {
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
