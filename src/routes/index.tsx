import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Cart from '../pages/Cart';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
