import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://dev.neffrey.com/graphql',
  cache: new InMemoryCache()
})

const Apollo = ({ children }) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default Apollo