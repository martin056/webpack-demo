import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux'

import appReducer from './global-reducer';
import history from './history';
import routes from './routes';
import Navigation from './navigation/Navigation';

const routerMid = routerMiddleware(history);
let middleware = [routerMid];

let store = createStore(
  appReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div id="react-root">
        <Navigation />
        {routes()}
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
