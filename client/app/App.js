import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Application from './containers/Application';

import store, { history } from './store';
import { SocketProvider } from './contexts/Sockets';

// Import application sass styles
import './styles/style.scss';

// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';

// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// react-bootstrap-table2 styles
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// rc-slider style
import 'rc-slider/assets/index.css';

import ScrollToTop from './scrollToTop';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <SocketProvider>
        <ScrollToTop>
          <Application>Hello</Application>
        </ScrollToTop>
      </SocketProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
