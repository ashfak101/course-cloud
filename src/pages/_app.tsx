import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/shared/Navbar";
import { wrapper } from "redux/store";

function MyApp({ Component, pageProps }: AppProps) {
 return (
  <>
   <Navbar />
   <Component {...pageProps} />
  </>
 );
}

export default wrapper.withRedux(MyApp);
