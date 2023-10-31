import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from "@apollo/client/link/context";

export const { getClient } = registerApolloClient(() => {

  const apiKey = process.env.API_KEY;
  const token = process.env.API_TOKEN;

  // Creating an authentication link
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        "X-API-Key": apiKey,
        authorization: `Basic ${token ?? ''}`,
      }
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(
      new HttpLink({
        uri: "https://cms.srmg-qa2.lower.k8.m1.brightspot.cloud/graphql/delivery/schema/view",
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        // fetchOptions: { cache: "no-store" },
      })
    ),
  });
});
