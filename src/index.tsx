import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './assets/scss/index.scss';

// Context
import { ContextProvider } from './context';

// Routes
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Routes />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
