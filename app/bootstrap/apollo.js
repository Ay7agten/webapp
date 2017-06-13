import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://192.168.1.101:4567/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

export default client;
