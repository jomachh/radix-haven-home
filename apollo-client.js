import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://radix-haven-client-stripe-demo.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
