import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import store from './store/store.js';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
