import { AnimateSharedLayout } from "framer-motion";
import { NavBar } from "../components";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimateSharedLayout>
        <NavBar />
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
