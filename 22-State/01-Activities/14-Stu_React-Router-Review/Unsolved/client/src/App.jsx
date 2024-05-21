import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// Bring in the Outlet component which will render the proper pages conditionally on the browser's URL
import {Outlet} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
            
            {/* TODO: Add code here that creates a allows for displaying the home page or single thought's comments */}
            <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
