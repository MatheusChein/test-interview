import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query';
import { RoutesComponent } from './routes';
import GlobalStyles from './styles/global';
import { queryClient } from './services/queryClient';

function App() {

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ReactQueryDevtools />
        <RoutesComponent />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
