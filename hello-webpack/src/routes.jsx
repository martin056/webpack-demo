import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Hello from './pages/Hello';
import TestRouter from './pages/TestRouter';

const routes = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        render={() => {
          return <Redirect to="/hello/" />
        }}
      />
      <Route key="hello" path="/hello" component={Hello} />
      <Route key="test-router" path="/test-router" component={TestRouter} />
      <Route
        key="not-found"
        render={() => {
          return <p>NOT FOUND</p>;
        }}
      />
    </Switch>
  );
}

export default routes;