import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BASE_URL } from './config';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ProtectedRoute from './routing/ProtectedRoute';
const Routes: React.FC = () => {
  return (
    <Switch>
      <ProtectedRoute exact path={`${BASE_URL}/home`} component={Home} />
      <Route exact path={`${BASE_URL}/`} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
