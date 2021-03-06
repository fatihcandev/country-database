
import { ApolloClient, gql, InMemoryCache } from "@apollo/client/core";
import { RestLink } from "apollo-link-rest";

export const query = gql`
  query GetCountries {
    countries @rest(type: "Country", path:"all") {
      name
      population
      region
      capital
      flag
    }
  }`;

const restLink = new RestLink({
  uri: "https://restcountries.eu/rest/v2/"
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});