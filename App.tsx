import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Home from './src/views/Home';
import client from './src/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
