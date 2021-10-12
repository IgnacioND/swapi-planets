import React from 'react';
import Home from './src/views/Home';
import {ApolloProvider} from '@apollo/client'
import client from './src/client'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
