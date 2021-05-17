import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { AnimateSharedLayout } from "framer-motion";
import { NavBar } from "../components";
import "../styles/globals.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <AnimateSharedLayout>
          <NavBar />
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
