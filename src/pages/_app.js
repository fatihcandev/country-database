import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../client';
import '../styles/app.css'

const MyApp = ({ Component, ...props }) => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
)

export default MyApp