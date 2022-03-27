import GlobalStyle from './styles/GlobalStyle';
import Layout from './Components/Layout';
import RouteApp from './routes';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <RouteApp />
    </Layout>
  );
}

export default App;
