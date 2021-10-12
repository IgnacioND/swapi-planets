import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
  credentials: 'omit',
  fetchOptions: {
    mode: 'no-cors',
  },
});
export default client;
