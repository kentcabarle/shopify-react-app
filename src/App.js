import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from "@apollo/client";
import Products from "./components/Products";
import "./App.css";

const url = new HttpLink({ uri: `https://funkent.myshopify.com/api/2022-07/graphql.json` });
const headers = {
  "Content-Type": "application/json",
  "X-Shopify-Storefront-Access-Token": "1a31038f95d0e758f301cf20a3be4f95",
};

const middleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers,
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: middleware.concat(url),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Products />
    </ApolloProvider>
  );
};

export default App;
