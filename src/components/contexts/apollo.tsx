// LIBRARIES
import React, { useContext } from "react";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  useMutation,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { useSession } from "next-auth/react";

interface ApolloProps {
  children: React.ReactNode;
}

// Rendered Component
const Apollo = ({ children }: ApolloProps) => {
  const { data: session, status } = useSession();

  // HttpLink
  const httpLink = createHttpLink({
    uri: "https://pt.neffrey.com/graphql",
  });
  // Auth Header Middleware
  const authMiddleware = setContext((_, { headers }) => {
    const timer1 = new Date();
    if (session && session.id_token) {
      console.log("Apollo: Yes authToken", session.id_token);
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${session.id_token}`,
        },
      };
    } else {
      console.log("Apollo: No authToken");
      return {
        headers: {
          ...headers,
          authorization: "",
        },
      };
    }
  });
  // Client
  const client = new ApolloClient({
    cache: new InMemoryCache({}),
    link: authMiddleware.concat(httpLink),
  });

  // Render
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default Apollo;
