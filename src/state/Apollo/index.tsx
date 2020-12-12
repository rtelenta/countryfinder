import { ApolloProvider } from "@apollo/client";
import client from "./client";

const Provider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
