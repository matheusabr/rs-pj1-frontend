import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Posts/Feed';
import New from './pages/Posts/New';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  );
}

export default Routes;
