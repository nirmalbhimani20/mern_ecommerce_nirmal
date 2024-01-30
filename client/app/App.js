import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Application from './containers/Application';

import store, { history } from './store';
import { SocketProvider } from './contexts/Sockets';

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
