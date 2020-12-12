import ApolloProvider from "./Apollo";

const AppProvider: React.FC = ({ children }) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};

export default AppProvider;
